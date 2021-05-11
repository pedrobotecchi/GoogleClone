import React, { Component } from 'react';
import '../styles/styles.css';
import SearchScreenNavigator from '../components/SearchScreenNavigator';
import Paginator from '../components/Paginator';
import RelatedSearch from '../components/RelatedSearch';
import SearchInfoSection from '../components/SearchInfoSection';
import SearchScreenFooter from '../components/SearchScreenFooter';

const MAX_RESULTS_PER_PAGE = 10;

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText : '',
    }
  }

  render() {
    const { params } = this.props.match;

    const searchedString = params.search;
    
    const searchStringWithoutSpaces = searchedString.replace(/\s/g, '');
    const capitalizedSearchString = searchedString[0].toUpperCase() + searchedString.slice(1);
    const urlWithSearchString = "https://" + searchStringWithoutSpaces + ".com.br";
    const firstResultString = capitalizedSearchString + " : Home";


    // Fulfill an array with all the result except the first one that will bu used to change the text
    var index = 0
    var searchResultBlocks = [];
    for(index = 0; index < MAX_RESULTS_PER_PAGE ; index++ ) {
      searchResultBlocks.push(
        [
        <div className="result__site">
          <div className="result__url">
            <a className="result__url" rel="noreferrer" target="_blank" href={urlWithSearchString}>{urlWithSearchString}</a>
          </div>
          <div className="result__homeURL">
            <a className="result__homeURL" rel="noreferrer" target="_blank" href={urlWithSearchString}>{firstResultString}</a>
          </div>
          <div className="result__description">
            Accelerating Engineering Results & Business Outcomes. Daitan provides engineering expertise in a wide range of technologies, frameworks and tools. Our software development approach applies data-driven techniques such as, Artificial Intelligence, Machine Learning, Data Engineering, BI and Analytics.
          </div>
        </div>
        ]
      )
    }

    return (
      <div>
        <SearchScreenNavigator search={searchedString} />
        <main>
          <div className="result__collumn">
            <section className="result__content">
              <div className="result__search">
                <span>About 63,100 results (0.91 seconds) </span>
              </div>

              { searchResultBlocks.map(link => link)}
              
              <RelatedSearch search={ searchedString }/>
              <Paginator/>
            </section>
            <SearchInfoSection search={ capitalizedSearchString }/>
          </div>
        </main>
        <SearchScreenFooter/>
      </div>
    )
  }
}

export default SearchResult;