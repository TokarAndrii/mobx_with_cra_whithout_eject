import React, { Component } from "react";
import { observer } from "mobx-react";
import { AppStore } from "../../../AppContext";
import uuidv1 from "uuid/v1";

const INITIAL_STATE = {
  todo: ""
};

@observer
class FormAddTodo extends Component {
  static contextType = AppStore;
  state = { ...INITIAL_STATE };

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { todo } = this.state;
    const id = uuidv1();

    const ready_todo = {
      name: todo,
      id,
      Completed: false
    };

    this.context.todos.addTodo(ready_todo);
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { label } = this.props;
    const { todo } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {label}
          <input
            onChange={this.handleInput}
            value={todo}
            type="text"
            name="todo"
          ></input>
        </label>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default FormAddTodo;
