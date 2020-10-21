import React, { useState } from 'react';
import './App.css';
import Validation from './components/Validation';
import Char from './components/Char';

function App() {
  const [state, setState] = useState({
    userInput: ''
  });

  const inputHandler = (event) => {
    setState({userInput: event.target.value});
  }

  const charList = state.userInput.split('').map((ch, index) => {
    return <Char key={index} character={ch} />
  });

  return (
    <div className="App">
     <h1>Assignment 2</h1>
     <input type="text" onChange={inputHandler} value={state.userInput} />
     <p>{state.userInput}</p>
     <Validation inputLength={state.userInput.length} />
     {charList}
    </div>
  );
}

export default App;
