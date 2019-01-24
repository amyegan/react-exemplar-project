import React from 'react';

const resourceUri = 'https://reqres.in/';

const buttonStyle = {
  backgroundColor: 'aliceblue'
}

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryString: '',
      searchSubmitted: false,
      showResults: false,
      searchResults: null
    };
  }

  fetchBooks = () => {
    fetch(`${resourceUri}api/books`)
      .then(res => res.json())
      .then(json => this.props.populateResults(json));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Search for a topic:
            <input value={this.state.queryString} onChange={this.onSearchInputChange} />
          </label>
          <button style={buttonStyle} type="submit" disabled={this.buttonDisabled()}>Search</button>
        </form>
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
    this.fetchBooks();
    this.setState({ searchSubmitted: true });
  }
}