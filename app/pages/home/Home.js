import React, { Component } from 'react';
import './style.scss';

// Icons
import GoogleLogo from '../../icons/google-2015.svg'

// Components
import InputContainer from '../../components/inputContainer';
import HomeScreenNavigator from '../../components/homeScreenNavigator/HomeScreenNavigator';
import HomeScreenFooter from '../../components/homeScreenFooter/homeScreenFooter';

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
    console.log('store',this.props.store)
    return (
      <div>
        <HomeScreenNavigator/>
        <main className="content">
          <img className="content__logo" alt="Google logo" src={GoogleLogo}/>
          <InputContainer saveSearch={(value) => this.setState({ searchText: value })}></InputContainer>
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