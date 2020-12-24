import React from "react";

const Display = (props) => {
  //on equals  click  show  the  output ,  if  input continues  , show input, change showoutput
  let { input, output, showInput } = props;

  return (
    <div id="display" className="display_font">
      {showInput ? input : output}
    </div>
  );
};

export default Display;
