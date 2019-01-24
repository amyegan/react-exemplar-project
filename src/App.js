import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchInput from './search/search-input.component';
import SearchResults from './results/search-results.component';
import { get } from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  render() {
    return (
      <div>
        <SearchInput populateResults={this.populateResults}/>
        <SearchResults results={this.resolveResults()} />
      </div>
    );
  }

  populateResults = (results) => {
    console.log('results', results);
    this.setState({results: results});
  }

  resolveResults = () => {
    //this.state.searchResults ? this.state.searchResults.data : [];
    return get(this.state.results, 'data', []);
  }
}

export default App;
