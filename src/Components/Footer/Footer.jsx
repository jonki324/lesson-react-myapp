import React, { useContext, useEffect, useState } from 'react';
import TodoContext from '../../Contexts/TodoContext';
import { DELETE_ALL_TODO } from '../../Actions/TodoAction';

const Footer = () => {
  const { state, dispatch } = useContext(TodoContext);

  const [isDelete, setIsDelete] = useState(false);

  const existDoneTodo = () => {
    return state.some((todo) => todo.isDone);
  };

  const isDesable = !existDoneTodo();

  useEffect(() => {
    setIsDelete(!existDoneTodo);
  }, [state]);

  const deleteAll = () => {
    if (isDelete) {
      const action = { type: DELETE_ALL_TODO };
      dispatch(action);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        name="delete"
        id="delete"
        onChange={(e) => setIsDelete(e.target.checked)}
        checked={isDelete}
        disabled={isDesable}
      />
      <label htmlFor="delete">
        {state.filter((todo) => todo.isDone).length} / {state.length}
      </label>
      <button type="button" onClick={deleteAll}>
        Delete Done Todos
      </button>
    </div>
  );
};

export default Footer;
