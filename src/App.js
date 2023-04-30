import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] =  useState('')
  return (
    <div className="App">
      <h2>React Timer</h2>
      <form action="">
        <input type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} />
      </form>
    </div>
  );
}

export default App;
