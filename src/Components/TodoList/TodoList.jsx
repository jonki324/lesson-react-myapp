import React, { Fragment, useContext } from 'react';
import TodoContext from '../../Contexts/TodoContext';
import Todo from './Todo/Todo';

const TodoList = () => {
  const { state } = useContext(TodoContext);

  return (
    <Fragment>
      {state.map((todo, index) => {
        return <Todo key={index} todo={todo} />;
      })}
    </Fragment>
  );
};

export default TodoList;
