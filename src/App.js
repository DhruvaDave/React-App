import React, { Component } from "react";
import { getList, getWarData } from "./utils/getData";
import Autocomplete from 'react-autocomplete';
import ResultData from './component/ResultData';
import "./App.css";

class App extends Component {
  state = {
    searchTerm: "",
    allDataList: [],
    value: '',
    searchResult: []
  };

  async componentDidMount() {
    const response = await getList();
    const locationList = response.AllData.map((location) => ({
      label: location
    }));
    // NOTE: I am assumming that I have a limited set of location, so loading those all in the fist time only
    this.setState({ allDataList: locationList });
  }

  onChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  onSelect = (searchTerm) => {
    this.setState({ searchTerm }, () => {
      this.onSubmitSearch();
    });
  }

  onSubmitSearch = async () => {
    const { searchTerm } = this.state;
    const response = await getWarData(searchTerm);
    this.setState({ searchResult: response.results });
  }

  render() {
    const { searchTerm, searchResult } = this.state;
    const items = this.state.allDataList.filter((item) => item.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
    return (
      <div className="container">
        <div className="search-container">
          <Autocomplete
            getItemValue={item => item.label}
            items={items}
            renderItem={(item, isHighlighted) => (
              <div
                style={{ background: isHighlighted ? "lightgray" : "white" }}
                key={item.label}
              >
                {item.label}
              </div>
            )}
            value={searchTerm}
            onChange={this.onChange}
            onSelect={this.onSelect}
          />
          <button onClick={this.onSubmitSearch}>Search</button>
        </div>
        <ResultData warList={searchResult} />
      </div>
    );
  }
}

export default App;
