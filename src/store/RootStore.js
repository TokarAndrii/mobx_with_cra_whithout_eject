import counterStore from "./CounterStore";
import todosStore from "./TodosStore";

class RootStore {
  constructor() {
    this.counter = counterStore;
    this.todos = todosStore;
  }
}

const rootStore = new RootStore();

export default rootStore;
