import React from 'react';

export default class SearchResults extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log('render search results');
  }
  
  // componentDidMount() {
  //   console.log('component did mount');
  // }

  // componentDidUpdate() {
  //   console.log('component did update');
  // }

  // componentWillUnmount() {
  //   console.log('component will unmount');
  // }

  // shouldComponentUpdate(nextProps) {
  //   return this.props.results !== nextProps.results;
  // }

  // componentDidUpdate() {
  //   console.log('component did update');
  // }

  render() {
    console.log('render');
    console.log(this.props.results);
    return (
        <ul>
          {this.props.results.map(renderSearchResult)}
        </ul>
    );
  }
}

function renderSearchResult(result) {
  return (
    <li key={result.id}>{result.name}: {result.year}</li>
  );
}