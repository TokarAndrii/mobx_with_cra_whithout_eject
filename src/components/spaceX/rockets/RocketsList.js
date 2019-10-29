import React, { Component } from "react";
import { observer } from "mobx-react";
import { AppStore } from "../../../AppContext";

@observer
class RocketsList extends Component {
  static contextType = AppStore;
  render() {
    const { rockets } = this.context.spaceX;
    return (
      <>
        {rockets && (
          <div>
            <h2>RocketsList</h2>
            {rockets.map(rocket => {
              return (
                <div
                  key={rocket.rocket_id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "90vw"
                  }}
                >
                  <span>
                    <b>{rocket.rocket_name}</b>
                  </span>
                  <a href={rocket.wikipedia}>wikipedia</a>
                  <span>
                    {" "}
                    {rocket.flickr_images.map(image => {
                      return (
                        <img
                          key={image}
                          alt={image}
                          src={image}
                          width="300px"
                          style={{ marginRight: "12px" }}
                        ></img>
                      );
                    })}
                  </span>
                  <span style={{ width: "300px" }}>{rocket.description}</span>
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }
}

export default RocketsList;
