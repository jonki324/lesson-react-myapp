import React, { useContext, useState } from 'react';
import { TodoContext } from '../../Store/Store';
import { CREATE_TODO } from '../../Actions/TodoAction';

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);

  const [body, setBody] = useState('');

  const isInValid = () => {
    return body.trim() === '';
  };

  const addTodo = () => {
    const action = {
      type: CREATE_TODO,
      payload: {
        body,
        isCompleted: false,
      },
    };
    dispatch(action);
    setBody('');
  };

  return (
    <>
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="button" onClick={addTodo} disabled={isInValid()}>
        Add New Todo
      </button>
    </>
  );
};

export default TodoForm;
