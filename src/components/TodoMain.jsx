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
  const [lightTheme, setLightTheme] = useState(true);

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
    // spara värdet på inkommande checkbox för att det inte ska ändras  (av någon oförklarlig orsak)
    const newDoneValue = e.target.checked;
    //skapa ett todo-item i det format som servicen (och i sin tur APIet) vill ha
    let tempAPITodo = {
      ...todo,
      assignee: todo.assignee.id,
      done: newDoneValue,
    };
    //be servicen uppdatera databasen
    let response = await todoService.updateDone(tempAPITodo);

    //skapa ett todo-item i det format som kommer i från GetAll, och som används på denna sidan
    let newtodo = {
      ...todo,
      done: newDoneValue,
    };

    // leta upp index på den ändrade todon i listan med alla todos
    const itemIndex = currentState.todos.findIndex(
      (todoItem) => todoItem.id == todo.id
    );

    //kopiera gamla listan av todos till ny lista för att state ska hanteras som immutable
    let newTodoList = [...currentState.todos];

    //uppdatera det ändrade todo-itemet på det index vi tog fram på rad 64
    newTodoList[itemIndex] = newtodo;

    setNewCurrentStateFunction({
      todos: newTodoList,
      loading: false,
    });
  };

  return currentState.loading ? (
    <div>
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
    <div className={lightTheme ? theContext.lightStyle : theContext.darkStyle}>
      <button
        className={'btn btn-' + theContext.colorStyle}
        onClick={() => {
          setLightTheme(!lightTheme);
        }}
      >
        Swith backgroundcolor
      </button>
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
