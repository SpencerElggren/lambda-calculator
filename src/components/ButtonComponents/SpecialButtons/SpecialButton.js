import React from "react";

const SpecialButton = props => {
  return (
      <button onClick={()=> props.addSpecial(props.special)} className="appButton">
        {props.special}
      </button>
  );
};
export default SpecialButton;