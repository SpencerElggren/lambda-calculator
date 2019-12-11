import React from "react";

const NumberButton = props => {
  return (
      <button  onClick={()=> props.addN(props.number)} className="appButtonNumb">
        {props.number}
      </button>
  );
};

export default NumberButton;
