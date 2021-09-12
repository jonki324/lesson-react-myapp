import React, { Fragment, useContext } from 'react';
import { TodoContext } from '../../Store/Store';
import Todo from '../Todo/Todo';

const TodoList = () => {
  const { state } = useContext(TodoContext);
  const { todoList, filter } = state;

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
