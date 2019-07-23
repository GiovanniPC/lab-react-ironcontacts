import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import ContactTable from './components/ContactTable/ContactTable'
import FunctionButton from './components/FunctionButton/FunctionButton'

class App extends Component {

  state = {
    list: contacts.slice(0,5),
  };

  addRandomContact = () => {
    
    let newList={
      ...this.state
    };

    newList.list.push(contacts[Math.floor(Math.random()*contacts.length)]);

    this.setState(newList);
  };

  sortByName = () => {
    let newList={
      ...this.state
    };

    newList.list.sort((a,b) => {
      if(a.name<b.name){return -1}
      if(a.name>b.name){return 1}
      return 0
    });

    this.setState(newList);
  };

  sortByPopularity = () => {
    let newList={
      ...this.state
    };

    newList.list.sort((a,b) => (b.popularity-a.popularity));
    this.setState(newList);

  };

  deleteContact = (name) => {

    let newList={
      ...this.state
    };

    newList.list = newList.list.filter(element => element.name !== name);
    this.setState(newList);
  };

  render() {
    return ( 
      <div className="App">
        <h1>IronContacts</h1>
        <div className="controller">
          <FunctionButton functionProp={this.addRandomContact}>Add Random Contact</FunctionButton>
          <FunctionButton functionProp={this.sortByName}>Sort by name</FunctionButton>
          <FunctionButton functionProp={this.sortByPopularity}>Sort by popularity</FunctionButton>
        </div>
        <ContactTable deleteProp={this.deleteContact} contactsProp={this.state.list} />
      </div>
    );
  };
};

export default App;