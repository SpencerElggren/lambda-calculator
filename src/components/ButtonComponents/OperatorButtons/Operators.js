import React, {useState} from "react"
import {operators} from "../../../data";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file

export const Operators = () => {
  const [operatorState, setOperator] = useState(operators);
  return (
    <div className="ops">
      {operatorState.map((operator, index) => (
          <OperatorButton
          key={index}
          operator={operator}
          />
      ))}
    </div>
  );
};
