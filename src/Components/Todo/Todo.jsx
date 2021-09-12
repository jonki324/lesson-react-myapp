import React, { useContext } from 'react';
import { TodoContext } from '../../Store/Store';
import { UPDATE_TODO, DELETE_TODO } from '../../Actions/TodoAction';

const Todo = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  const checkboxId = `completed_${todo.id}`;

  const toggleStatus = () => {
    const action = {
      type: UPDATE_TODO,
      payload: { ...todo, isCompleted: !todo.isCompleted },
    };
    dispatch(action);
  };

  const deleteTodo = () => {
    const action = {
      type: DELETE_TODO,
      payload: todo,
    };
    dispatch(action);
  };

  return (
    <div>
      <input
        type="checkbox"
        id={checkboxId}
        checked={todo.isCompleted}
        onChange={toggleStatus}
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
