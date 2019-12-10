import React from "react";

const OperatorButton = props => {
  return (
    <button className="appButton">
      {props.operator.value}
    </button>
  );
};
export default OperatorButton