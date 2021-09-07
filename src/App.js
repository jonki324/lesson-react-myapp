import React, { useReducer } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import TodoList from './Components/TodoList/TodoList';
import './App.css';
import TodoContext from './Contexts/TodoContext';
import TodoReducer from './Reducers/TodoReducer';

const App = () => {
  const [state, dispatch] = useReducer(TodoReducer, []);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <h1 className="App">TodoList</h1>
      <Header />
      <TodoList />
      <Footer />
    </TodoContext.Provider>
  );
};

export default App;
