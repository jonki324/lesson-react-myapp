import React from 'react';
import StoreProvider from '../../Store/Store';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import TodoListFilter from '../TodoListFilter/TodoListFilter';
import TodoSummary from '../TodoSummary/TodoSummary';

const TodoPage = () => {
  return (
    <StoreProvider>
      <h1>Todo List Page</h1>
      <TodoListFilter />
      <h2>Todo List</h2>
      <TodoList />
      <TodoForm />
      <TodoSummary />
    </StoreProvider>
  );
};

export default TodoPage;
