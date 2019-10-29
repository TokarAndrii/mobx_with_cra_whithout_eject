import { observable, action, toJS, computed } from "mobx";

class TodosStore {
  @observable todos = [
    {
      name: "Learn React",
      id: "1b671a64-40d5-491e-99b0-da01ff1f3341",
      isCompleted: true
    },
    {
      name: "Learn MobX",
      id: "2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d",
      isCompleted: false
    }
  ];

  @observable
  currentTodosId = null;

  @action
  setCurrentTodosId(id) {
    this.currentTodosId = id;
  }

  @action
  addTodo(todo) {
    this.todos = [...this.todos, todo];
  }

  @action.bound
  toggleCompleted(id) {
    //console.log("setCompleted");
    //console.log(toJS(this.todos.find(todo => todo.id === id)));
    this.todos = this.todos.map(todo => {
      return todo.id === id
        ? { ...todo, isCompleted: !todo.isCompleted }
        : todo;
    });
  }

  @action.bound
  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  @action.bound
  findTodoById(id) {
    return toJS(this.todos.find(todo => todo.id === id));
  }

  @action.bound
  editTodo(todo) {
    return (this.todos = this.todos.map(currentTodo =>
      currentTodo.id === todo.id ? { ...todo } : currentTodo
    ));
  }
}

const todosStore = new TodosStore();

export default todosStore;
