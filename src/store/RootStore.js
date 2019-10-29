import counterStore from "./CounterStore";
import todosStore from "./TodosStore";
import spaceXStore from "./SpaceXStore";

class RootStore {
  constructor() {
    this.counter = counterStore;
    this.todos = todosStore;
    this.spaceX = spaceXStore;
  }
}

const rootStore = new RootStore();

export default rootStore;
