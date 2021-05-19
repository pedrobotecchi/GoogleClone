import React, { Component } from 'react';
import './style.scss';

// Components
import SearchScreenNavigator from '../../components/searchScreenNavigator/SearchScreenNavigator';
import SearchScreenResultBlock from '../../components/searchScreenResultBlock/SearchScreenResultBlock';
import Paginator from '../../components/paginator/Paginator';
import RelatedSearch from '../../components/relatedSearch/RelatedSearch';
import SearchInfoSection from '../../components/searchInfoSection/SearchInfoSection';
import getSearchResults from '../../api/search';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText : '',
      searchResult : null,
    }
  }

  componentDidMount(){
    const { params } = this.props.match;
    getSearchResults(params.search).then(data => this.setState({ searchResult: data }));
  }

  render() {
    const { params } = this.props.match;
    const searchedString = params.search;
    return (
      <div>
        <SearchScreenNavigator search={searchedString} />
        <main>
          <div className="result__collumn">
            <section className="result__content">
              <SearchScreenResultBlock search={ searchedString } resultArray={ this.state.searchResult }/>
              <RelatedSearch search={ searchedString }/>
              <Paginator/>
            </section>
            <SearchInfoSection search={ searchedString }/>
          </div>
        </main>
      </div>
    )
  }
}

export default SearchResult;