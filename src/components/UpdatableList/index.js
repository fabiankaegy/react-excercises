import React, { Component } from 'react';
import './style.css';
import ListItem from '../ListItem';
import TextInput from '../TextInput';

class UpdatableList extends Component {
  /* 
  * Add state to this component with a parameter
  * called ListItems that has an empty Array as its value.
  */
  
  /*
   * Create a function that adds text passed via the 
   * submit event to the end of the array in the state.
   */
  
  /*
   * Return one List item for each item in the ListItems array 
   * stored in the state
   */
  render() {
    return (
      <div className="updatable-list">
        <TextInput onSubmit={this.addToList} />
      </div>
    );
  }
}

export default UpdatableList;
