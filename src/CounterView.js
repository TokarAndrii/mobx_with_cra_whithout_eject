import React, { Component } from "react";
import { CounterStore } from "./CounerContext";
import { observer } from "mobx-react";

@observer
class CounterView extends Component {
  static contextType = CounterStore;

  componentDidMount() {
    console.log(this.context);
    console.log(this.context.count);
  }

  render() {
    return <div>{this.context.count}</div>;
  }
}

export default CounterView;
