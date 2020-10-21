import React, { useState } from 'react';
import './App.css';
import Validation from './components/Validation';
import Char from './components/Char';

function App() {
// STATE ==========================================================================
  const [state, setState] = useState({
    userInput: ''
  });

// Handler ========================================================================
  const inputHandler = (event) => {
    setState({userInput: event.target.value});
  }

  const deleteCharHandler = (index) => {
    const text = state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    setState({userInput: updatedText});
  }

// MAP ============================================================================
  const charList = state.userInput.split('').map((ch, index) => {
    return <Char key={index} character={ch} clicked={() => deleteCharHandler(index)} />
  });

// RENDER =========================================================================
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
