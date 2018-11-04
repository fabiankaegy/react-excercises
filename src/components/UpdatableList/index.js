import React, { Component } from 'react';
import './style.css';
import ListItem from '../ListItem';
import TextInput from '../TextInput';

class UpdatableList extends Component {
  state = {
    ListItems: []
  }
  addToList = event => { 
    event.preventDefault();
    var joined = this.state.ListItems.concat( event.target.TextInput.value );
    this.setState( {
      ListItems: joined,
    } );
    event.target.TextInput.value = '';
  };
  render() {
    return (
      <div className="updatable-list">
        <TextInput onSubmit={ this.addToList } />
        { this.state.ListItems.map( ( item, key ) => <ListItem key={ key } text={ item } /> )}
      </div>
    );
  }
}

export default UpdatableList;
