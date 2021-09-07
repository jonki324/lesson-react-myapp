import React, { useContext } from 'react';
import TodoContext from '../../../Contexts/TodoContext';
import { DONE_TODO, DELETE_TODO } from '../../../Actions/TodoAction';

const Todo = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  const checkboxId = `done_${todo.id}`;

  const toggleDone = () => {
    const action = {
      type: DONE_TODO,
      id: todo.id,
      isDone: !todo.isDone,
    };
    dispatch(action);
  };

  const deleteTodo = () => {
    const action = {
      type: DELETE_TODO,
      id: todo.id,
    };
    dispatch(action);
  };

  return (
    <div>
      <input
        type="checkbox"
        name="done"
        id={checkboxId}
        checked={todo.isDone}
        onChange={toggleDone}
      />
      <label htmlFor={checkboxId}>
        ID: {todo.id}, Body: {todo.body}
      </label>
      <button type="button" onClick={deleteTodo}>
        Delete Todo
      </button>
    </div>
  );
};

export default Todo;
