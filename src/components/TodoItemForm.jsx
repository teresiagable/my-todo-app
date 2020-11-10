import React, { useEffect, useState } from 'react';
import todoService from '../api/todoService';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function TodoItemForm() {
  const [todoItem, setTodoItem] = useState({
    item: '',
    users: [],
    isLoading: true,
  });
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async (data) => {
    let newtodo = data;
    console.log(data);

    let response = await todoService.updateDone(newtodo);
    console.log(data);
  };

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

//  info om fälten:
//   type=tex 'datetime-local' eller 'text', titta på react-hook-forms hjälpsida för att se vad komponenten vill ha här för det du vill använda fältet till
//   name='deadline' = detta måste vara exakt samma som det värdet heter i objektet som ska visas i formen
//   defaultValue={todoItem.item.deadline} : detta är vad som är förifyllt när sidan öppnas
//   ref={register} = detta betyder att fältet skickas med i submitten

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
            <input type='hidden' name='id' value={todoItem.item.id} ref={register} />

      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}

      {/* register your input into the hook by invoking the "register" function */}
      <table className='table dark'>
        <tr>
          <td>
            <label className='col-form-label'>Deadline </label>
          </td>
          <td>
            <input
              type='datetime-local'
              name='deadline'
              defaultValue={todoItem.item.deadline}
              ref={register}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label className='col-form-label'>Title </label>
          </td>
          <td>
            <input
              type='text'
              name='title'
              defaultValue={todoItem.item.title}
              ref={register({ required: true, maxLength: 100 })}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label className='col-form-label'>Description </label>
          </td>
          <td>
            <input
              type='text'
              name='description'
              defaultValue={todoItem.item.description}
              ref={register({ required: true, maxLength: 200 })}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label className='col-form-label'>Assignee </label>
          </td>
          <td>
            {/* // name nedan måste heta exakt samma som det heter i api-anropet. På lektionen skrev jag assignee med stort A vilket inte funkar. */}
            <select name='assignee' ref={register({ required: true })}>
              {todoItem.users.map((user) => (
                <option
                  key={user.id}
                  selected={user.id === todoItem.item.assignee.id}
                  value={user.id}
                >
                  {user.firstName + ' ' + user.lastName}
                </option>
              ))}
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label className='col-form-label'>Done </label>
          </td>
          <td>
            <input
              type='checkbox'
              name='done'
              defaultChecked={todoItem.item.done}
              ref={register}
              className='ml-2'
            />
          </td>
        </tr>
        <tr>
          <td colSpan='2'>
            <input type='submit' />
          </td>
        </tr>
      </table>
    </form>
  );
}



    //  {/* include validation with required or other standard HTML validation rules */}
    //     {/* errors will return when field validation fails  */}
    //     {errors.exampleRequired && <span>This field is required</span>}
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
