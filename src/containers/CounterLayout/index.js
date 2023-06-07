import "./counterLayout.css";
import { useState } from "react";
import Button from "../../components/button";

//Stateful Component => Container
function CounterLayout() {
  // let count = 0;
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    // setCount(count - 1)
    setCount((prev) => prev - 1);
    console.log(count);
  };

  const handleIncrease = () => {
    // setCount(count + 1)
    setCount((prev) => prev + 1);
    console.log(count);
  };

  return (
    <div className="container">
      <h1 className="header">Counter</h1>
      <div className="counter-wrapper">
        <Button handleClick={handleDecrease} color="red" variant="text">
          -
        </Button>
        <span className="count">{count}</span>
        <Button handleClick={handleIncrease} color="green" variant="outlined">
          +
        </Button>
      </div>
    </div>
  );
}

export default CounterLayout;
