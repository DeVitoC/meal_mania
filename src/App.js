import logo from './logo.svg';
import './App.css';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* <Favorites /> */}
          {/* <Meals /> */}
          <Modal />
          {/* <Search /> */}
      </header>
    </div>
  );
}

export default App;
