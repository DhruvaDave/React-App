// import React from 'react';
// import logo from './logo.svg';
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
    // this.onChange = debounce(this.onChange.bind(this), 100);
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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React Dhruva
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
