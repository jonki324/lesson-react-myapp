import React, { useContext } from 'react';
import { TodoContext } from '../../Contexts/TodoContext';
import {
  DELETE_ALL_TODO,
  TOGGLE_ALL_COMPLETED,
} from '../../Actions/TodoAction';

const TodoSummary = () => {
  const { state, dispatch } = useContext(TodoContext);
  const { todoList } = state;

  const isAllCompleted = () => {
    return todoList.every((todo) => todo.isCompleted);
  };

  const existCompletedTodo = () => {
    return todoList.some((todo) => todo.isCompleted);
  };

  const toggleAllCompleted = (e) => {
    const action = { type: TOGGLE_ALL_COMPLETED, payload: e.target.checked };
    dispatch(action);
  };

  const deleteAll = () => {
    const action = { type: DELETE_ALL_TODO };
    dispatch(action);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="toggleAllStatus"
        onChange={toggleAllCompleted}
        checked={isAllCompleted() && todoList.length > 0}
        disabled={todoList.length === 0}
      />
      <label htmlFor="toggleAllStatus">Toggle All Todo Completed Status</label>
      <div>
        {todoList.filter((todo) => todo.isCompleted).length} (Completed Todo
        Count) / {todoList.length} (All Todo Count)
        <button
          type="button"
          onClick={deleteAll}
          disabled={!existCompletedTodo()}
        >
          Delete Completed Todos
        </button>
      </div>
    </div>
  );
};

export default TodoSummary;
