import React, { Component } from 'react';
import './style.scss';

import Icon from '@material-ui/core/Icon';

class InputContainer extends Component {
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
      this.setState({ searchText : value }, () => this.props.saveSearch(value))
    }
  }

  render () {
    return(
      <div className="content__input">
        <button onClick={this.searchInputAction} id="searchButton">
          <Icon>search</Icon>
        </button>
        <input className="content__input__search" type="text" placeholder="Search Google or type a URL" id="userSearch" onKeyUp={this.searchInputAction} />
        <button>
          <Icon>mic</Icon>
        </button>
      </div>
    )
  }
}

export default InputContainer;