import React from "react";

const OperatorButton = props => {
  return (
    <button onClick={()=> props.addOperator(props.operator.value)} className="appButton">
      {props.operator.value}
    </button>
  );
};
export default OperatorButton