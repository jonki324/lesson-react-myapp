import React from "react";
import User from './User/User';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import List from './Components/List/List';
import './App.css';

const App = () => {
  return (
    <>
      <div className="App">Hello</div>
      <User id={1} name='name' />
      <Header />
      <List />
      <Footer />
    </>
  );
}

export default App;
