import React from "react";
import todoService from "./../api/todoService";


const Todos = (props) => {
  console.log("todos",props.todolist);

  return (
    <>
      <table id="tableTodo" className="table table-hover">
        <thead>
          <tr className="table-danger">
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
    </>
  );
};




export const TodoItem = (props) => {
  let todo = props.todo;
  let date = new Date(todo.deadline);
  let isChecked = todo.done ? "checked" : "";
  //console.log("updateDone", props);
  return (
    <tbody>
      <tr className="table-secondary">
        <td>
          {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </td>
        <td>{todo.title}</td>
        <td>{todo.description}</td>
        <td>{`${todo.assignee.firstName} ${todo.assignee.lastName}`}</td>
        <td>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={(e) => props.updateDone(e, todo)}
          />
        </td>
        <td>
          <input
            type="button"
            className="btn btn-warning btn-sm"
            value="Edit"
          />
        </td>
      </tr>
    </tbody>
  );
};;

export default Todos;
