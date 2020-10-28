import React, { Component, Fragment } from "react";
import todoService from "./../api/todoService";
import Todos from "./Todos";

class Home extends Component {
  state = {
    todos: [],
    loading: true,
  };

  async componentDidMount() {
    let todolist = await todoService.getAll();
    console.log("todolist", todolist);
    this.setState({
      todos: todolist,
      loading: false,
    });
  }

  toggleDone = (e, todo) => {
    //console.log("togglevalue", todo);
    //console.log("e", e.target.checked);

    let newtodo = { ...todo, done: e.target.checked };
    console.log("updated todo item", newtodo);
    //här ska vi göra något med svaret sen.
    let response = todoService.updateDone(newtodo);
  };

  render() {
    return this.state.loading ? (
      <div>Loading</div>
    ) : (
      <Todos todolist={this.state.todos} updateDone={this.toggleDone} />
    );
  }
}

export default Home;
