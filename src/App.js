import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [input, setInput] =  useState('')
  const [ secounds, setSecounds ] = useState(0)
  const render = useRef(0);

  const timerId = useRef()

   function handleChange (e){
      setInput(e.target.value)
      render.current++
   }

   function startTimer(){
    timerId.current = setInterval(() => {
      render.current++
      setSecounds(prev => prev + 1)
    },1000)
   }

   function stopTimer(){
    clearInterval(timerId.current)
    timerId.current = 0
   }

   function resetTimer(){
    stopTimer();
    if(secounds){
      render.current++
      setSecounds(0)
    }
   }
  return (
    <div className="App">
      <h2>React Timer</h2>
      <form action="">
        <input type="text"
        value={input}
        onChange={handleChange} />
      </form>
      <div>
        <p>Renders:{render.current}</p>
        <div>
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
        <p>Secounds: {secounds}</p>
        <h2 style={{ padding: '10px'}}>{input}</h2>
      </div>
    </div>
  );
}

export default App;
