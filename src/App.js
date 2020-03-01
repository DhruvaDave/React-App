import React, { Component } from 'react'
import {debounce} from 'lodash';
import './App.css';
import {countData} from './routes';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: props.searchTerm,
      allcount: countData
    };
  }

  onChange = debounce((searchTerm) => {
    console.log(searchTerm);
    this.setState({ searchTerm });
   }, 500);

  render() {
    const { searchTerm } = this.state;
    console.log(searchTerm);
    console.log("---this.state-----",this.state.allcount);
    return (
      <div>
        <p>{this.state.searchTerm}</p> here
        <input onChange={ e => this.onChange(e.target.value)} />
        <h2>There are {this.state.allcount} Battles!</h2>
      </div>
    );
  }
}

export default App;
