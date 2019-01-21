import React from 'react';
import SearchResults from '../results/search-results.component';

const exampleResults = [
  {title: "learn react", description: "article on learning react"},
  {title: "learn jsx", description: "article on learning jsx"},
  {title: "learn react routing", description: "article on learning react routing"}
]

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryString: '',
      searchSubmitted: false
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Search for a topic:
            <input value={this.state.queryString} onChange={this.onSearchInputChange} />
          </label>
        </form>
        <button type="submit" disabled={this.buttonDisabled()}>Search</button>
        <p>Query String is {this.state.queryString}</p>

        <hr />

        {this.state.searchSubmitted && <SearchResults results={exampleResults}/>}

      </div>      
    );
  }

  buttonDisabled = (e) => {
    return this.state.queryString === '';
  }

  onSearchInputChange = (e) => {
    this.setState({ queryString: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ searchSubmitted: true });
  }
}