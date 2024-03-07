import './App.css';
import "./Components/Sample";
import Sample from './Components/Sample';

function App() {
  const tech="React-JS";
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/

    <div className='App'>
      <h1>Welcome to {tech}</h1>
      <Sample/>
      <Sample/>
      <Sample/>
      <Sample/>
    </div>
  );
}

export default App;
