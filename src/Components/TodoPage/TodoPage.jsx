import React, { useReducer } from 'react';
import { TodoContext } from '../../Contexts/TodoContext';
import TodoReducer, { initialState } from '../../Reducers/TodoReducer';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import TodoListFilter from '../TodoListFilter/TodoListFilter';
import TodoSummary from '../TodoSummary/TodoSummary';

const TodoPage = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <h1>Todo List Page</h1>
      <TodoListFilter />
      <h2>Todo List</h2>
      <TodoList />
      <TodoForm />
      <TodoSummary />
    </TodoContext.Provider>
  );
};

export default TodoPage;
