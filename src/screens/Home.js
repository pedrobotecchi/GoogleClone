import React, { Component } from 'react';
import '../styles/styles.css';

import GoogleLogo from '../assets/google-2015.svg'
import HomeScreenNavigator from '../components/HomeScreenNavigator';
import HomeScreenFooter from '../components/HomeScreenFooter';
import Icon from '@material-ui/core/Icon';

class Home extends Component {
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
        <HomeScreenNavigator/>
        <main className="content">
            <img className="content__logo" alt="Google logo" src={GoogleLogo}/>
            <div className="content__input">
                <button onClick={this.searchInputAction} id="searchButton">
                  <Icon>search</Icon>
                </button>
                <input className="content__input__search" type="text" placeholder="Search Google or type a URL" id="userSearch" onKeyUp={this.searchInputAction} />
                <button>
                  <Icon>mic</Icon>
                </button>
            </div>
            <div className="content__button__container">
                <button className="content__button" onClick={this.searchInputAction}>Google Search</button>
                <button className="content__button" onClick={this.searchInputAction}>I'm Feeling Lucky</button>
            </div>    
        </main>
        <HomeScreenFooter/>
      </div>
    )
  }
}

export default Home;