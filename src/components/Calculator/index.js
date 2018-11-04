import React, { Component } from 'react';
import InputButton from '../InputButton';
import './style.css';

class Calculator extends Component {

  state = {
    number: "",
    tool: "+",
    total: "0",
  }

  updateNumber = event => {
    const newNumber = "" + this.state.number + event.target.value;
    this.setState({
      ...this.state,
      number: newNumber,
    })
  }

  updateTool = event => {

    this.setState({
      ...this.state,
      tool: event.target.value,
    });

    const newTotal = eval(`${this.state.total}  ${this.state.tool} ${this.state.number}`);
    this.setState({
      ...this.state,
      tool: event.target.value,
      number: "",
      total: newTotal,
    });

  };

  calculateTotal = () => {

    const total = eval(`${this.state.total} ${this.state.tool} ${this.state.number}`)
    this.setState({
      ...this.state,
      number: total,
    });

  };

  reset = () => {

    this.setState({
      number: "",
      tool: "+",
      total: "0",
    });

  };

  calculatorNumbers = ["1","2","3","4","5","6","7","8","9","0"];
  calculatorTools = ["+","-","*","/","%"];

  render() {
    return (
      <div className="calculator">
        <div className="wrapper">
          <h3>{ this.state.number }</h3>
          <input type="button" value="AC" onClick={ this.reset } />
          { 
            this.calculatorNumbers.map( ( item, key ) => (
              <InputButton key={ key } value={ item } onClick={ this.updateNumber } />
            ))
          }
          { 
            this.calculatorTools.map( ( item, key ) => (
              <InputButton key={ key } value={ item } onClick={ this.updateTool } className="tool" />
            ))
          }
          <input type="button" value="=" onClick={ this.calculateTotal } className="tool" />
        </div>
      </div>
    );
  }
}

export default Calculator;
