import React, { Component } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import { AppStore } from "../../../AppContext";

@observer
class TodosView extends Component {
  static contextType = AppStore;

  componentDidMount() {
    console.log("TodosView", toJS(this.context));
  }

  handleChangeInput = id => {
    this.context.todos.setCompleted(id);
  };

  render() {
    const { todos } = this.context.todos;
    const js_todos = toJS(todos);
    return (
      <>
        <h1>TodosView</h1>
        {js_todos &&
          js_todos.map(todo => (
            <div key={todo.id}>
              <span>
                name: <b>{todo.name}</b>
              </span>
              <span style={{ marginLeft: "12px" }}>
                completed:{todo.isCompleted ? "Yes" : "No"}
              </span>
              <input
                type="checkBox"
                checked={todo.isCompleted}
                onChange={() => this.context.todos.toggleCompleted(todo.id)}
              ></input>
            </div>
          ))}
      </>
    );
  }
}

export default TodosView;
