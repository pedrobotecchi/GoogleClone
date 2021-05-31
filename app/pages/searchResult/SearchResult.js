import React, { Component } from 'react';
import './style.scss';

// Components
import SearchScreenNavigator from '../../components/searchScreenNavigator/SearchScreenNavigator';
import SearchScreenResultBlock from '../../components/searchScreenResultBlock/SearchScreenResultBlock';
import Paginator from '../../components/paginator/Paginator';
import RelatedSearch from '../../components/relatedSearch/RelatedSearch';
import SearchInfoSection from '../../components/searchInfoSection/SearchInfoSection';
import { getSearchResults } from '../../api/search';

// Redux-Saga
import { useSelector, useDispatch } from 'react-redux';
import { loadSearch } from '../../actions'
import { connect } from 'react-redux'

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
    const dispatch = this.props.dispatch();
    dispatch(loadSearch(params.search));
  }

  render() {
    const { params } = this.props.match;
    const searchedString = params.search;
    // PostGreSQL
    //const searchResults = this.props.selector().searchReducer.searchResults[0] || [];

    //MongoDb
    const searchResults = this.props.selector().searchReducer.searchResults.searchResults || [];
    return (
      <div>
        <SearchScreenNavigator search={searchedString} />
        <main>
          <div className="result__collumn">
            <section className="result__content">
              <SearchScreenResultBlock search={ searchedString } resultArray={ searchResults }/>
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

const mapDispatchToProps = dispatch => ({
  dispatch: () => dispatch
})

const mapStateToProps = state => ({
  selector: () => state
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);