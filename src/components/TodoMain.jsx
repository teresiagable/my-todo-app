import React, { useState, useEffect } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import todoService from '../api/todoService';
import Loader from 'react-loader-spinner';
import TodoList from './TodoList';
import { useContext } from 'react';
import DisplayContext from '../context/DisplayContext';

const TodoMain = (props) => {
  const [currentState, setNewCurrentStateFunction] = useState({
    todos: [],
    loading: true,
  });
  const theContext = useContext(DisplayContext);
  const [lightTheme, setLightTheme] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      let todolist = await todoService.getAll();
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

 

  const toggleDone = async (e, todo) => {

    let newtodo = { ...todo, done: e.target.checked };
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
  console.log("innan loading",lightTheme)
  return currentState.loading ? (
    <div >
      <Loader
        //style={{ textAlign: 'center' }}
        type='Watch'
        color='#d33682'
        height={100}
        width={100}
      />  
    </div>
  ) : (
    //{lightTheme? {`theContext.lightStyle`}:{theContext.darkStyle}
  <div className={lightTheme?theContext.lightStyle:theContext.darkStyle}>
    <button className={'btn btn-'+ theContext.colorStyle } onClick={()=>{setLightTheme(!lightTheme)}}>Swith backgroundcolor</button>
    <TodoList todolist={currentState.todos} updateDone={toggleDone} />
    </div>
  );
};

export default TodoMain;


 // async componentDidMount() {
  //   let todolist = await todoService.getAll();
  //   console.log('todolist', todolist);
  //   this.setState({
  //     todos: todolist,
  //     loading: false,
  //   });
  // }