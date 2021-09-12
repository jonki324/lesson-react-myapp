import React, { createContext, useReducer } from 'react';
import TodoReducer from '../Reducers/TodoReducer';

export const TodoContext = createContext();

const initialState = {
  todoList: [],
  filter: { keyword: '', removeCompleted: false },
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default StoreProvider;
