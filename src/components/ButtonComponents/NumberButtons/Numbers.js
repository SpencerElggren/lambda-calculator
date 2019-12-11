import React, {useState} from "react"
import {numbers} from "../../../data";
import NumberButton from "./NumberButton";
import {addNumber} from "mathjs/es/plain/number";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

export const Numbers = (props) => {
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div className="numbs">
      {numberState.map((number, index) => {
      return <NumberButton
              key={number}
              number={number}
              addN={props.addN}/>})
      }
    </div>
  );
};
