import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import TextInput from '../TextInput/TextInput';

class UpdatableList extends Component {
  state = {
    ListItems: []
  }
  addToList = (event) => { 
    event.preventDefault();
    var joined = this.state.ListItems.concat(event.target.TextInput.value);
    this.setState( {
      ListItems: joined,
    } );
    event.target.TextInput.value = '';
  };
  render() {
    return (
      <div className="updatable-list">
        <TextInput onSubmit={this.addToList} />
        {this.state.ListItems.map( (item, key) => <ListItem key={key} text={item} />)}
      </div>
    );
  }
}

export default UpdatableList;
