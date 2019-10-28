import React, { Component } from "react";
import { observer } from "mobx-react";
import "./App.css";
import CounerView from "./counter/CounterView";
import Form from "./todos/formAddTodos/FormAddTodo";
import TodosList from "./todos/todosView/ToDosView";
import { AppStore } from "../AppContext";

@observer
class App extends Component {
  static contextType = AppStore;

  componentDidMount() {
    console.log("app", this.context);
    console.log(typeof this.context.decrementCount);
  }
  render() {
    const { incrementCount, decrementCount } = this.context.counter;
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
        <Form label="Add toDo:"></Form>
        <TodosList></TodosList>
      </div>
    );
  }
}

export default App;
