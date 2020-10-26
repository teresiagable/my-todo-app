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

  render() {
    return this.state.loading ? (
      <div>Loading</div>
    ) : (
      <Todos todolist={this.state.todos} />
    );
  }
}

export default Home;
