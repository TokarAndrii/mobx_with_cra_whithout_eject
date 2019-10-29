import React, { Component } from "react";
import { observer } from "mobx-react";
import { AppStore } from "../../../AppContext";
import styles from "./EditTodoForm.module.css";

const INITIAL_STATE = {
  name: "",
  isCompleted: false,
  id: ""
};

@observer
class EditTodoForm extends Component {
  static contextType = AppStore;

  state = { ...INITIAL_STATE };

  componentDidMount() {
    const id = this.context.todos.currentTodosId;
    const foundTodo = this.context.todos.findTodoById(id);
    this.setState({ ...foundTodo });
  }
  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmitEditForm = e => {
    e.preventDefault();
    const { name, isCompleted, id } = this.state;
    const editedTodo = { name, isCompleted, id };
    this.context.todos.editTodo(editedTodo);
    this.setState({ ...INITIAL_STATE });
    const { onToggleEditForm } = this.props;
    onToggleEditForm();
  };

  render() {
    const { name, isCompleted, id } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmitEditForm}>
        <h2>EditTodoForm</h2>
        <span>ID: {id}</span>
        <label className={styles.row}>
          Name:
          <input
            onChange={this.handleInputChange}
            type="text"
            name="name"
            value={name}
          />
        </label>
        <label className={styles.row}>
          Completed:
          <input
            onChange={this.handleInputChange}
            type="checkbox"
            name="isCompleted"
            checked={isCompleted}
          />
        </label>
        <button type="submit">save changes</button>
      </form>
    );
  }
}

export default EditTodoForm;
