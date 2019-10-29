import React, { Component } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import { AppStore } from "../../../AppContext";
import styles from "./TodosView.module.css";

@observer
class TodosView extends Component {
  static contextType = AppStore;

  handleChangeInput = id => {
    this.context.todos.setCompleted(id);
  };

  handelClickEditBtn = id => {
    const { onShowEditForm } = this.props;
    this.context.todos.setCurrentTodosId(id);
    onShowEditForm();
  };

  render() {
    const { todos } = this.context.todos;
    const js_todos = toJS(todos);
    //const { onShowEditForm } = this.props;
    return (
      <>
        <h1>TodosView</h1>
        {js_todos &&
          js_todos.map(todo => (
            <div key={todo.id} className={styles.row}>
              <span>
                name: <b>{todo.name}</b>
              </span>
              <div>
                <span style={{ marginLeft: "12px" }}>
                  Completed:{todo.isCompleted ? "Yes" : "No"}
                </span>
                <input
                  type="checkBox"
                  checked={todo.isCompleted}
                  onChange={() => this.context.todos.toggleCompleted(todo.id)}
                />
              </div>

              <button
                type="button"
                onClick={() => this.handelClickEditBtn(todo.id)}
              >
                Edit
              </button>

              <button onClick={() => this.context.todos.deleteTodo(todo.id)}>
                delete
              </button>
            </div>
          ))}
      </>
    );
  }
}

export default TodosView;
