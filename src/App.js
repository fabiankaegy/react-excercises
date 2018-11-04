import React, { Component } from 'react';
import Counter from './components/Counter';
import UpdatableList from './components/UpdatableList';
import Calculator from './components/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>JS4WP - Study Group - React Week</h1> 
        <div className="excercise">
          <h2>Example 1: Counter</h2>
          <p>Build a counter component that stores a count in state and lets you increment and decrement the count using two buttons.</p>
          <Counter />
        </div>
        <hr />
        <div className="excercise">
          <h2>Example 2: Updatable List</h2>
          <p>Build a Form with a Text Input Field. When the form gets submitted the Text Value of the Input should be added to a list stored in state that renders a ListItem Component for each Element in it.</p>
          <UpdatableList />
        </div>
        <hr />
        <div className="excercise late">
          <h2>Example 3: Calculator</h2>
          <p>Build a simple traditional Calculator</p>
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
