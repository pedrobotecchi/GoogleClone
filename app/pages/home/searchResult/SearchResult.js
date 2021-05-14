import React, { Component } from 'react';
import './style.scss';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText : '',
    }
  }

  // Function that will get the string to search
  searchInputAction = (e) => {
    const { target : { value }, key } = e;
    if(!key || key === 'Enter') {
      if(this.state.searchText !== '')
        window.location.href = `/searchResult/${this.state.searchText}`;
    }
    else {
      this.setState({ searchText: value });
    }
  }

  render() {
    return (
      <div>
        HELLO
      </div>
    )
  }
}

export default SearchResult;