import React, { Component } from 'react';
import Button from '../Button';

class Counter extends Component {
  state = {
    number: 0,
  }

  incrementNumber = () => { 
    this.setState( {
      number: this.state.number + 1,
    } );
  };
  decrementNumber = () => { 
    this.setState( {
      number: this.state.number - 1,
    } );
  };

  render() {
    return (
      <div className="Counter">
        <h1>Count: {this.state.number}</h1>
        <Button onClick={this.incrementNumber} text="Add" />
        <Button onClick={this.decrementNumber} text="Substract" />
      </div>
    );
  }
}

export default Counter;
