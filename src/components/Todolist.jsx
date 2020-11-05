import { useState, useEffect } from 'react';
import React from 'react';
import { Button } from '@material-ui/core';

const TodoList = (props) => {
  const [message, setMessage] = useState();
  //console.log('todos', props.todolist);

  useEffect(() => {
    console.log('props har ändrats');
  }, [props.todolist]);

  // Changing the title every time the message changes is a side-effect,
  // so it needs to go in `useEffect`
  useEffect(() => {
    console.log('nytt message', message);
    document.title = message;
  }, [message]);

  return (
    <>
      <table id='tableTodo' className='table table-hover'>
        <thead>
          <tr className='table-danger'>
            <th>Date</th>
            <th>Title</th>
            <th>Description</th>
            <th>Assigned to</th>
            <th>Done</th>
            <th></th>
          </tr>
        </thead>
        {props.todolist.map((todo) => (
          <TodoItem key={todo.id} todo={todo} updateDone={props.updateDone} />
        ))}
      </table>
      <br /> Enter something and look at doucument title:
      <input type='text' onChange={(e) => setMessage(e.target.value)} />
    </>
  );
};

export const TodoItem = (props) => {
  let todo = props.todo;
  let date = new Date(todo.deadline);
  let isChecked = todo.done ? 'checked' : '';
  //console.log("updateDone", props);
  return (
    <tbody>
      <tr className='table-secondary'>
        <td>
          {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </td>
        <td>{todo.title}</td>
        <td>{todo.description}</td>
        <td>{`${todo.assignee.firstName} ${todo.assignee.lastName}`}</td>
        <td>
          <input
            type='checkbox'
            checked={todo.done}
            onChange={(e) => props.updateDone(e, todo)}
          />
        </td>
        <td>
          {/* <input
            type='button'
            className='btn btn-warning btn-sm'
            value='Edit'
          /> */}

          {/* ${todo.id}  kommer att plockas upp av useParams i todoitemForm */}
          <Button
            variant='contained'
            className='btn btn-warning btn-sm'
            href={`/todoitemform/${todo.id}`}
          >
            Edit
          </Button>
        </td>
      </tr>
    </tbody>
  );
};

export default TodoList;
