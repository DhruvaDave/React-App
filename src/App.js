import React, { Component } from 'react'
import {debounce} from 'lodash';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: props.searchTerm
    };
  }

  onChange = debounce((searchTerm) => {
    console.log(searchTerm);
    this.setState({ searchTerm });
   }, 500);

  render() {
    const { searchTerm } = this.state;
    console.log(searchTerm);
    return (
      <div>
        <input onChange={ e => this.onChange(e.target.value)} />
      </div>
    );
  }
}

export default App;
