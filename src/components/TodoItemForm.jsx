import React, { useEffect, useState } from 'react';
import todoService from '../api/todoService';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function TodoItemForm() {
const [todoItem, setTodoItem] = useState({
  item: '',
  users: '',
  isLoading: true,
});
const { register, handleSubmit, watch, errors } = useForm();
const onSubmit = (data) => console.log(data);

let param = useParams();
console.log(param);

useEffect(() => {
  const fetchData = async () => {
    let theItem = await todoService.getTodoItem(param.id);
    let theUsers = await todoService.getAllUsers();
    setTodoItem({ item: theItem, users: theUsers, isLoading: false });
  };
  fetchData();
}, []);

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}

    {/* register your input into the hook by invoking the "register" function */}
    <input name='example' defaultValue='test' ref={register} />

    {/* include validation with required or other standard HTML validation rules */}
    <input name='exampleRequired' ref={register({ required: true })} />
    {/* errors will return when field validation fails  */}
    {errors.exampleRequired && <span>This field is required</span>}

    <input type='submit' />
  </form>
);
}
//  <div>
//     TodoItemForm {JSON.stringify(param)}
//     <br />
//     <br />
//     item: {JSON.stringify(todoItem.item)}
//     <br />
//     <br />
//     item: {JSON.stringify(todoItem.users)}
//   </div>
// );
// }
