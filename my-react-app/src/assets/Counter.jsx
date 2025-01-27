 import React, {useState} from 'react';

 function Counter(){
    let [count, setCount] = useState(0);
    const increment = () => {
      setCount(count+= 1);
    }
    const decrement = () => {
      setCount(count -= 1);
    }
    const reset = () => {
      setCount(count = 0);
    }


    return (
      <div className="counter-container">
        <p className="count-display">{count}</p>
        <button className = "counter-button" onClick={decrement}>Decrement</button>
        <button className = "counter-button" onClick={reset}>Reset</button>
        <button className = "counter-button" onClick={increment}>Incement</button>
      </div>
    );
 }

 export default Counter