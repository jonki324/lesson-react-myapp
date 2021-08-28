import User from './User/User';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import List from './Components/List/List';
import './App.css';

const App = () => {
  return (
    <div>
      <div className="App">Hello</div>
      <User id={1} name='name' />
      <Header />
      <List />
      <Footer />
    </div>
  );
}

export default App;
