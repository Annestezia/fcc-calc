import React from "react";

const Keypad = (props) => {
  return (
    <div id="keypad">
      <button id="clear" onClick={props.handleCeClick}>
        CE
      </button>
      <button id="seven" onClick={props.handleNumClick}>
        7
      </button>
      <button id="eight" onClick={props.handleNumClick}>
        8
      </button>
      <button id="nine" onClick={props.handleNumClick}>
        9
      </button>
      <button id="add" onClick={props.handleOperClick}>
        +
      </button>
      <button id="four" onClick={props.handleNumClick}>
        4
      </button>
      <button id="five" onClick={props.handleNumClick}>
        5
      </button>
      <button id="six" onClick={props.handleNumClick}>
        6
      </button>
      <button id="subtract" onClick={props.handleOperClick}>
        -
      </button>
      <button id="one" onClick={props.handleNumClick}>
        1
      </button>
      <button id="two" onClick={props.handleNumClick}>
        2
      </button>
      <button id="three" onClick={props.handleNumClick}>
        3
      </button>
      <button id="multiply" onClick={props.handleOperClick}>
        *
      </button>
      <button id="zero" onClick={props.handleNumClick}>
        0
      </button>
      <button id="decimal" onClick={props.handleDecClick}>
        .
      </button>
      <button id="equals" onClick={props.handleEqualsClick}>
        =
      </button>
      <button id="divide" onClick={props.handleOperClick}>
        /
      </button>
    </div>
  );
};

export default Keypad;
