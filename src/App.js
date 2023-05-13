// import logo from './logo.svg';
import React from 'react';
import './App.css';

function Increment() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className='App'>
      <div>
        <h1 id='display'>{counter}</h1>
        <div>
          <button id='button' onClick={() => setCounter(counter + 1)}>
            Increment +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Increment;
