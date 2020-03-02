import React, { Component } from "react";
import { debounce } from "lodash";
import { getCount,getList } from './utils/getData';
import Autocomplete from "./utils/Autocomplete";
import "./App.css";
require("./utils/style.css");


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: props.searchTerm,
      totalCount: 0,
      allDataList:[],
      value: ''
    };
  }

  async componentDidMount() {
    const response = await getCount();
    this.setState({ totalCount: response.numOfDocs });
    console.log("---response.count---",response);
    console.log("---response.count---",response.numOfDocs);

    const response_data = await getList();
    this.setState({ allDataList: response_data.AllData });
    console.log("---response_data---",response_data);
    console.log("---response_data--list---",response_data.AllData);
  }


  onChange = debounce(async searchTerm => {
    this.setState({ searchTerm });
  }, 500);

  onSubmitSearch (e)  {
    console.log("-------seaarch-----",e);
    // console.log(React.findDOMNode(Autocomplete.refs.search_val).value);
  }

  render() {
    // const { totalCount } = this.state;
    return (
      <div>
        {/* {totalCount} */}
        <p>{this.state.searchTerm}</p> here
        <input onChange={e => this.onChange(e.target.value)} />
        <h2>There are {this.state.totalCount} Battles!</h2>
        
        <Autocomplete suggestions= {this.state.allDataList} />
        {/* console.log(React.findDOMNode(this.refs.cpDev1).value); */}
        {/* <Autocomplete suggestions= {this.state.allDataList} onChange={(event, value) => this.setState({ value }) } onSelect={ value => this.setState({ value }) }/> */}
        {/* <p>{Autocomplete.sss}</p>  */}
        <button onClick={(e) => this.onSubmitSearch(this.state.value)} >Search</button> 
        {/* <button onClick={e => this.state.searchTerm}>Search</button>  */}
      </div>
    );
  }
}

export default App;
