import React, { useState, useEffect } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import todoService from '../api/todoService';
import Loader from 'react-loader-spinner';
import TodoList from './TodoList';

const TodoMain = (props) => {
  const [currentState, setNewCurrentStateFunction] = useState({
    todos: [],
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      let todolist = await todoService.getAll();
      console.log('didmount list', todolist);
      setNewCurrentStateFunction({
        todos: todolist,
        loading: false,
      });
    };
    fetchData();

    return () => {
      console.log('component did unmount');
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let todolist = await todoService.getAll();
      console.log('didmount list', todolist);
      setNewCurrentStateFunction({
        todos: todolist,
        loading: false,
      });
    };
    fetchData();

    return () => {
      console.log('component did unmount');
    };
  }, []);

  // async componentDidMount() {
  //   let todolist = await todoService.getAll();
  //   console.log('todolist', todolist);
  //   this.setState({
  //     todos: todolist,
  //     loading: false,
  //   });
  // }

  const toggleDone = async (e, todo) => {
    //console.log("togglevalue", todo);
    //console.log("e", e.target.checked);

    let newtodo = { ...todo, done: e.target.checked };
    //console.log("updated todo item", newtodo);
    let response = await todoService.updateDone(newtodo);

    const itemIndex = currentState.todos.findIndex(
      (todoItem) => todoItem.id == todo.id
    );

    let newTodoList = [...currentState.todos];
    newTodoList[itemIndex] = newtodo;

    setNewCurrentStateFunction({
      todos: newTodoList,
      loading: false,
    });
  };

  return currentState.loading ? (
    <div>
      <Loader
        style={{ textAlign: 'center' }}
        type='Watch'
        color='#d33682'
        height={100}
        width={100}
      />
    </div>
  ) : (
    <TodoList todolist={currentState.todos} updateDone={toggleDone} />
  );
};

export default TodoMain;
