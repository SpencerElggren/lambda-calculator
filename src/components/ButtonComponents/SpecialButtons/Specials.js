import React, {useState} from "react"
import {specials} from "../../../data";
import SpecialButton from "./SpecialButton";
//import any components needed

//Import your array data to from the provided data file

export const Specials = (props) => {
  const [specialState, setSpecialState] = useState(specials);

  return (
    <div className="specs">
      {specialState.map((special, index) => (
          <SpecialButton
              key={index}
              special={special}
              addSpecial={props.addSpecial}
          />
      ))}
    </div>
  );
};
