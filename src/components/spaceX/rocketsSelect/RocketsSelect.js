import React, { Component } from "react";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { AppStore } from "../../../AppContext";

const INITIAL_STATE = {
  rocket_name: ""
};

@observer
class RocketsSelect extends Component {
  static contextType = AppStore;

  componentDidMount() {
    this.context.spaceX.getAllAvailRockets();
    console.log("RocketsSelect", toJS(this.context.spaceX.all_rockets_avail));
  }

  handleChange = e => {
    const { target } = e;
    const { value } = target;
    return this.context.spaceX.setRocketName(value);
  };

  handleLoad = e => {
    e.preventDefault();
    const { rocketName } = this.context.spaceX;
    this.context.spaceX.loadRocketsById(rocketName);
  };

  render() {
    return (
      <div>
        <select onChange={this.handleChange}>
          <option value="">select rocket</option>
          {this.context.spaceX.getAvailRocketsIds.map(curr => {
            return (
              <option key={curr} value={curr}>
                {curr}
              </option>
            );
          })}
        </select>
        <button onClick={this.handleLoad}>Load</button>
      </div>
    );
  }
}

export default RocketsSelect;
