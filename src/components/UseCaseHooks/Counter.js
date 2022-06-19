import { useCallback, useState } from "react";
import Addition from "./Addition";
import Substraction from "./Substraction";
import "./Counter.css"

const Counter = () => {
  const [ counter, setCounter ] = useState(0);

  const counterHandler = (dataCounter) => {
    setCounter(dataCounter);
  };

  return (
    <div className="Container">
      <h3>Counter Value: {counter}</h3>
      <span>
        <Addition counter={counter} counterHandler={counterHandler} />
      </span>
      <span>
        <Substraction counter={counter} counterHandler={counterHandler} />  
      </span>
    </div>
  )
}

export default Counter;