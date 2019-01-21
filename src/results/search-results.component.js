import React from 'react';

export default function SearchResults(props) {
  return (
    <div>
      <ul>
        {props.results.map(renderSearchResult)}
      </ul>
    </div>
  );
}

function renderSearchResult(result) {
  return (
    <li>{result.title}: {result.description}</li>
  );
}