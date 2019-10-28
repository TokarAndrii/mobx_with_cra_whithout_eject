import React, { Component } from "react";
import { observer } from "mobx-react";
import "./App.css";
import CounerView from "./CounterView";
import { CounterStore } from "./CounerContext";

@observer
class App extends Component {
  static contextType = CounterStore;

  componentDidMount() {
    console.log("app", this.context);
    console.log(typeof this.context.decrementCount);
  }
  render() {
    const { incrementCount, decrementCount } = this.context;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <CounerView></CounerView>
        <div>
          <button onClick={() => incrementCount(2)}>+2</button>
          <button onClick={() => decrementCount(2)}>-2</button>
        </div>
      </div>
    );
  }
}

export default App;
