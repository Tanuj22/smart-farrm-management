import logo from './logo.svg';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Smart Farm Management
        </p>
      </header>
    </div>
  );
}

export default App;
