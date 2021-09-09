import React, { useContext } from 'react';
import { TodoContext } from '../../Contexts/TodoContext';
import { FILTER_TODO } from '../../Actions/TodoAction';

const TodoListFilter = () => {
  const { state, dispatch } = useContext(TodoContext);
  const { filter } = state;

  const filterKeyword = (e) => {
    const keyword = e.target.value;
    const action = {
      type: FILTER_TODO,
      payload: { ...filter, keyword },
    };
    dispatch(action);
  };

  const filterRemoveCompleted = (e) => {
    const removeCompleted = e.target.checked;
    const action = {
      type: FILTER_TODO,
      payload: { ...filter, removeCompleted },
    };
    dispatch(action);
  };

  return (
    <fieldset>
      <legend>Search Todo</legend>
      <label htmlFor="filterWord">Keyword: </label>
      <input
        type="text"
        id="filterWord"
        placeholder="Filter Word"
        value={filter.keyword}
        onChange={filterKeyword}
      />
      <input
        type="checkbox"
        id="filterRemoveCompleted"
        checked={filter.removeCompleted}
        onChange={filterRemoveCompleted}
      />
      <label htmlFor="filterRemoveCompleted">Remove Completed Todo</label>
    </fieldset>
  );
};

export default TodoListFilter;
