import { observable, action, computed, runInAction } from "mobx";
import axios from "axios";

class SpaceXStore {
  @observable
  rockets = [
    {
      rocket_id: "falcon1",
      rocket_name: "Falcon 1",
      description:
        "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
      flickr_images: [
        "https://www.spacex.com/sites/spacex/files/styles/media_gallery_large/public/2009_-_01_liftoff_south_full_wide_ro8a1280_edit.jpg?itok=8loiSGt1",
        "https://www.spacex.com/sites/spacex/files/styles/media_gallery_large/public/2009_-_02_default_liftoff_west_full_wide_nn6p2062_xl.jpg?itok=p776nHsM"
      ],
      wikipedia: "https://en.wikipedia.org/wiki/Falcon_1"
    }
  ];

  @observable
  all_rockets_avail = [];

  @observable
  state = "none"; // "pending"  "done"  "error" ""

  @observable
  rocketName = "";

  @action.bound
  setRocketName(name) {
    this.rocketName = name;
  }

  @computed
  get getAvailRocketsIds() {
    return this.all_rockets_avail.map(rocket => rocket.rocket_id);
  }

  @action.bound
  async loadRocketsById(id) {
    try {
      this.state = "pending";
      const rocket = await axios
        .get(`https://api.spacexdata.com/v3/rockets/${id}`)
        .then(resp => resp.data);
      console.log("rocket at getRocketsById", rocket);
      //setTimeOut for show LOADER
      setTimeout(() => {
        runInAction(() => {
          this.state = "done";
          this.rockets = [...this.rockets, rocket];
        });
      }, 3000);
    } catch (error) {
      console.log("error", error);
      this.state = "error";
    }
  }

  @action
  async getAllAvailRockets() {
    try {
      const rockets = await axios
        .get("https://api.spacexdata.com/v3/rockets/")
        .then(resp => resp.data);
      console.log("rockets at getAllAvailRockets", rockets);

      runInAction(() => {
        this.state = "done";
        this.all_rockets_avail = rockets;
      });
    } catch (error) {
      console.log("error", error);
      this.state = "error";
    }
  }
}

const spaceXStore = new SpaceXStore();

export default spaceXStore;
