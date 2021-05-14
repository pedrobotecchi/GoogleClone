import React, { Component } from 'react';
import './style.scss';

// Constants
import { ResultBlock } from '../../constants/resultReferences';

class SearchScreenResultBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText : props.search,
      capitalizedSearchString : props.search[0].toUpperCase() + props.search.slice(1),
      searchTextWithNoSpaces : props.search.replace(/\s/, '')
    }
  }


  renderResultSearch = (element,index) => {
    const { capitalizedSearchString, searchTextWithNoSpaces } = this.state;
    return (
      <div className="result__site">
        <div className="result__url">
          <a className="result__url" rel="noreferrer" target="_blank" href={`www.${searchTextWithNoSpaces}.com.br`}>{`www.${searchTextWithNoSpaces}.com.br`}</a>
        </div>
        <div className="result__homeURL">
          <a className="result__homeURL" rel="noreferrer" target="_blank" href={`www.${searchTextWithNoSpaces}.com.br`}>{`${capitalizedSearchString}: Home`}</a>
        </div>
        <div className="result__description">
          {element.description}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="result__search">
          <span>About 63,100 results (0.91 seconds) </span>
        </div>
        {
          ResultBlock.map((element,index) => this.renderResultSearch(element,index))
        }
      </div>
    )
  }
}

export default SearchScreenResultBlock;