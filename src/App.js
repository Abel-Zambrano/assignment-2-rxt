import React, { useState } from 'react';
import './App.css';
import Validation from './components/Validation';

function App() {
  const [state, setState] = useState({
    userInput: ''
  });

  const inputHandler = (event) => {
    setState({userInput: event.target.value});
  }

  return (
    <div className="App">
     <h1>Assignment 2</h1>
     <input type="text" onChange={inputHandler} value={state.userInput} />
     <p>{state.userInput}</p>
     <Validation inputLength={state.userInput.length} />
    </div>
  );
}

export default App;
