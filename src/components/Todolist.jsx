import React, { Component, Fragment } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import todoService from '../api/todoService';
import Loader from 'react-loader-spinner';
import Todos from './Todos';

class Home extends Component {
  state = {
    todos: [],
    loading: true,
  };

  async componentDidMount() {
    let todolist = await todoService.getAll();
    console.log('todolist', todolist);
    this.setState({
      todos: todolist,
      loading: false,
    });
  }

  toggleDone = async (e, todo) => {
    //console.log("togglevalue", todo);
    //console.log("e", e.target.checked);

    let newtodo = { ...todo, done: e.target.checked };
    //console.log("updated todo item", newtodo);
    //här ska vi göra något med svaret sen.
    let response = await todoService.updateDone(newtodo);

    const itemIndex = this.state.todos.findIndex(
      (todoItem) => todoItem.id == todo.id
    );

    let newTodoList = [...this.state.todos];
    newTodoList[itemIndex] = newtodo;

    this.setState({
      todos: newTodoList,
    });
  };

  render() {
    return this.state.loading ? (
      <div>
        <Loader
          style={{ 'text-align': 'center' }}
          type='Watch'
          color='#d33682'
          height={300}
          width={300}
        />
      </div>
    ) : (
      <Todos todolist={this.state.todos} updateDone={this.toggleDone} />
    );
  }
}

export default Home;
