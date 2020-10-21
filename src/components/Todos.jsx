import React from "react";

const Todos = (props) => {
  console.log("todos",props.todolist);

  return (
    <><table><thead></thead>
      {props.todolist.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      </table>
    </>
  );
};


export const TodoItem = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.todo.title}</td>
      </tr>
    </tbody>
  );
};

export default Todos;
