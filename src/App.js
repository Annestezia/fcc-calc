import React, { Component } from "react";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import "./styles.css";

function fixInput(inputStr, currentOp) {
  const lastTwoOp = /([+\-*/]{2})$/;
  const lastThreeOp = /([+\-*/]{3})$/; //
  const allowTwo = /(\*|\/)-/; //don't replace *- and /-
  const toTest = inputStr + currentOp;
  if (lastTwoOp.test(toTest) && !allowTwo.test(toTest)) {
    // if there are 2 operators and those are not the allowed combinations, replace  them with the last operator
    inputStr = inputStr.slice(0, -1) + currentOp;
  } else if (lastThreeOp.test(toTest)) {
    // if there are 3 operators, replace  them with the last operator
    inputStr = inputStr.slice(0, -2) + currentOp;
  } else {
    inputStr += currentOp;
  }
  return inputStr;
}

const init = () => ({
  input: "",
  output: 0,
  showInput: false,
  decimal: false
});

export default class App extends Component {
  state = init();

  // HANDLERS
  handleCeClick = () => {
    this.setState(init);
  };

  handleNumClick = (e) => {
    const { input } = this.state;
    const value = e.target.textContent;
    if (e.target.id === "zero" && +input === 0) {
      //if there's 0 in input and 0 is clicked, do nothing
      e.preventDefault();
    } else {
      //add number to input,showinput, reset operators number
      this.setState((state) => ({
        input: input + value,
        showInput: true,
        opnum: 0
      }));
    }
  };

  handleDecClick = (e) => {
    const value = e.target.textContent;
    const { input, decimal } = this.state;
    if (decimal === true) {
      //if there's decimal in the input, do nothing
      e.preventDefault();
    } else {
      //add decimal to the input
      if (!input) {
        this.setState({
          input: "0."
        });
      } else {
        this.setState({
          input: input + value
        });
      }
      //default behavior: set decimal to true and show the input
      this.setState({
        decimal: true,
        showInput: true
      });
    }
  };

  handleOperClick = (e) => {
    const value = e.target.textContent;
    const fixedInput = fixInput(this.state.input, value);

    this.setState({
      input: fixedInput,
      decimal: false,
      showInput: true
    });
  };

  handleEqualsClick = () => {
    const { input } = this.state;
    const re  = /[+\-/*]+$/;    
    let result = +eval(input.replace(re, '')).toFixed(7).toString();

    if (result.length > 11) {
      result = result.slice(0, 11);
    }
    this.setState((state) => ({
      showInput: false,
      output: result,
      input: result //test14
    }));
  };

  render() {
    const handlers = {
      handleCeClick: this.handleCeClick,
      handleNumClick: this.handleNumClick,
      handleOperClick: this.handleOperClick,
      handleEqualsClick: this.handleEqualsClick,
      handleDecClick: this.handleDecClick,
      handleInput: this.handleInput
    };
    const { input, output, showInput } = this.state;
    return (
      <div className = "calc">
        <Display output={output} input={input} showInput={showInput} />
        <Keypad {...handlers} />
      </div>
    );
  }
}
