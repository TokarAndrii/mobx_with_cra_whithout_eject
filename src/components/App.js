import React, { Component } from "react";
import { observer } from "mobx-react";
import "./App.css";
import CounerView from "./counter/CounterView";
import AddTodoForm from "./todos/formAddTodos/FormAddTodo";
import EditTodoForm from "./todos//editTodoForm/EditTodoForm";
import TodosList from "./todos/todosView/ToDosView";
import RocketsList from "./spaceX/rockets/RocketsList";
import RocketsSelect from "./spaceX/rocketsSelect/RocketsSelect";
import { AppStore } from "../AppContext";

const INITIAL_STATE = {
  showAddTodoForm: false,
  showEditTodoForm: false
};

@observer
class App extends Component {
  static contextType = AppStore;

  state = { ...INITIAL_STATE };

  handleToggleAddTodosForm = () => {
    this.setState(prevState => ({
      showAddTodoForm: !prevState.showAddTodoForm
    }));
  };

  handleToggleEditTodosForm = () => {
    this.setState(prevState => ({
      showEditTodoForm: !prevState.showEditTodoForm
    }));
  };

  render() {
    const { incrementCount, decrementCount } = this.context.counter;
    const { showAddTodoForm, showEditTodoForm } = this.state;
    const { state } = this.context.spaceX;
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
        <br></br>
        <button
          style={{ margin: "12px 0", padding: "8px 12x" }}
          type="button"
          onClick={this.handleToggleAddTodosForm}
        >
          Click to toggle Add new Todo
        </button>
        {showAddTodoForm && <AddTodoForm label="Add toDo:"></AddTodoForm>}
        {showEditTodoForm && (
          <EditTodoForm
            onToggleEditForm={this.handleToggleEditTodosForm}
          ></EditTodoForm>
        )}
        <TodosList onShowEditForm={this.handleToggleEditTodosForm}></TodosList>
        <RocketsSelect></RocketsSelect>
        <RocketsList></RocketsList>
        {state === "pending" && (
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "30%",
              width: "600px",
              height: "100px",
              backgroundColor: "grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            ...LOADING...
          </div>
        )}
      </div>
    );
  }
}

export default App;
