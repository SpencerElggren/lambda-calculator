import React from "react";

const NumberButton = props => {
    console.log(props);
  return (
      <button className="appButtonNumb">
        {props.number}
      </button>
  );
};

export default NumberButton;
