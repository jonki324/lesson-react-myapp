import React, { Fragment, useContext, useEffect } from 'react';
import { FETCH_ALL_TODO } from '../../Actions/TodoAction';
import { fetchTodoList } from '../../Services/TodoService';
import { TodoContext } from '../../Store/Store';
import Todo from '../Todo/Todo';

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  const { todoList, filter } = state;

  useEffect(() => {
    fetchTodoList().then(({ data }) => {
      dispatch({ type: FETCH_ALL_TODO, payload: data });
    });
  }, []);

  return (
    <Fragment>
      {todoList
        .filter((todo) => (filter.removeCompleted ? !todo.isCompleted : true))
        .filter((todo) =>
          filter.keyword !== ''
            ? todo.body.indexOf(filter.keyword) !== -1
            : true
        )
        .map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
    </Fragment>
  );
};

export default TodoList;
