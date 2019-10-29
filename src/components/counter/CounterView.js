import React, { Component } from "react";
import { AppStore } from "../../AppContext";
import { observer } from "mobx-react";

@observer
class CounterView extends Component {
  static contextType = AppStore;

  render() {
    const { count } = this.context.counter;
    return <div>{count}</div>;
  }
}

export default CounterView;
