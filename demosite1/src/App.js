import './App.css';
import "./Components/Sample";
import Sample from './Components/Sample';
import Model from './Components/Mobile';
import React, { useState } from 'react';

function App() {
  const tech="React-JS";
  const [displaycontent,SetContent]=useState(1715);

  function SetData()
  {
    SetContent(7755);
  }
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

    /*<div className='App'>
      <h1>Welcome to {tech}</h1>
      <Model Brand="Oneplus" Details="CE 3" price="30K"></Model>
      <Model Brand="Samsung" Details="Ultra S24" price="130K"></Model>
      <Model Brand="Apple" Details="13 pro max" price="150K"></Model>
      <Model Brand="Oneplus" Details="CE 3" price="30K"></Model>
      <Model Brand="Oneplus" Details="CE 3" price="30K"></Model>
    </div>*/
    <>
      <h1>{displaycontent}</h1>
      <button onClick={SetData}>Click Button</button>
    </>
  );
}

export default App;
