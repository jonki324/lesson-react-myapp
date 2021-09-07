import React, { useContext, useState } from 'react';
import TodoContext from '../../Contexts/TodoContext';
import { CREATE_TODO } from '../../Actions/TodoAction';

const Header = () => {
  const { dispatch } = useContext(TodoContext);

  const [body, setBody] = useState('');

  const addTodo = () => {
    if (body.trim() !== '') {
      const action = {
        type: CREATE_TODO,
        body,
      };
      dispatch(action);
      setBody('');
    }
  };

  return (
    <>
      <input
        type="text"
        name="body"
        id="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="button" onClick={addTodo}>
        Add
      </button>
    </>
  );
};

export default Header;
