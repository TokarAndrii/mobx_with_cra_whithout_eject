import React, { Component } from "react";
import { createContext } from "react";
import rootStore from "./store/RootStore";

export const AppStore = createContext(rootStore);

export default class AppStoreProvider extends Component {
  render() {
    return (
      <AppStore.Provider value={rootStore}>
        {this.props.children}
      </AppStore.Provider>
    );
  }
}
