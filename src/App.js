import React, { Component } from "react";
import { debounce } from "lodash";
import { getCount } from './utils/getData';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: props.searchTerm,
      totalCount: 0
    };
  }

  async componentDidMount() {
    const response = await getCount();
    this.setState({ totalCount: response.count });
  }

  onChange = debounce(async searchTerm => {
    this.setState({ searchTerm });
  }, 500);

  render() {
    const { totalCount } = this.state;
    return (
      <div>
        {totalCount}
        <p>{this.state.searchTerm}</p> here
        <input onChange={e => this.onChange(e.target.value)} />
        <h2>There are {this.state.allcount} Battles!</h2>
      </div>
    );
  }
}

export default App;
