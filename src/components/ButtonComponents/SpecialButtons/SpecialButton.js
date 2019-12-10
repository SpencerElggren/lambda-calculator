import React from "react";

const SpecialButton = props => {
  return (
      <button className="appButton">
        {props.special}
      </button>
  );
};
export default SpecialButton;