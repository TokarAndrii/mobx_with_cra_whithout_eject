import React, { Component } from "react";
import { createContext } from "react";
import counterStore from "./Counter";

export const CounterStore = createContext(counterStore);

export default class CountStoreProvider extends Component {
  render() {
    return (
      <CounterStore.Provider value={counterStore}>
        {this.props.children}
      </CounterStore.Provider>
    );
  }
}
