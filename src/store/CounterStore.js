import { observable, action } from "mobx";

class CounterStore {
  @observable count = 0;

  @action.bound
  incrementCount(value = 1) {
    console.log("incrementCount");
    this.count += value;
  }

  @action.bound
  decrementCount(value = 1) {
    console.log("decrementCount");
    this.count -= value;
  }
}

const counterStore = new CounterStore();

export default counterStore;
