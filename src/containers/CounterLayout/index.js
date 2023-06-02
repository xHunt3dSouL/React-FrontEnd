// useState is a React hook that allows you to add state to functional components.
// In this component, we're using the useState hook to create a count state variable and a setCount function to update it.
// The initial value of the count is set to 0.
// When the "-" button is clicked, the handleDecrease function is called, and it decrements the count value by 1 using setCount.
// When the "+" button is clicked, the handleIncrease function is called, and it increments the count value by 1 using setCount.
// The count value is displayed in the <span> element, which is updated whenever the state changes.

import "./counterLayout.css";
import { useState } from "react";
function CounterLayout() {
  //let count = 0;
  const [count, setCount] = useState(0);
  const handleDecrease = () => {
    //setCount(count - 1);
    setCount((prev) => prev - 1);
    console.log(count);
  };
  const handleIncrease = () => {
    //setCount(count + 1);
    setCount((prev) => prev + 1);
    console.log(count);
  };

  return (
    <div className="Container">
      <h1 className="header">Counter</h1>
      <div className="counter-container">
        <button className="counter-btn" onClick={handleDecrease}>
          -
        </button>
        <span className="count">{count}</span>
        <button className="counter-btn" onClick={handleIncrease}>
          +
        </button>
      </div>
    </div>
  );
}
export default CounterLayout;
