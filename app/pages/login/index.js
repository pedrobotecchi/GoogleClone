import React, { Component } from 'react';
import './style.scss';

import LoginEmail from '../../components/loginEmail';
import LoginPassword from '../../components/loginPassword';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
      switchLayoutToReceivePassword : false
    }
  }

  // Function that will get the string to search
  searchInputAction = (e) => {
    const { target : { value }, key } = e;
    const { switchLayoutToReceivePassword } = this.state;
    if(!key || key === 'Enter') {
      if(this.state.searchText !== '')
        this.setState({ switchLayoutToReceivePassword : !switchLayoutToReceivePassword });
    }
    else {
      this.setState({ searchText: value });
    }
  }

  render() {
    const { switchLayoutToReceivePassword } = this.state;
    return (
      <div className="content">
        { !switchLayoutToReceivePassword ? <LoginEmail setEmail={(value) => this.setState({ email: value, switchLayoutToReceivePassword : true })}/> 
        : <LoginPassword email={this.state.email} setPassword={(value) => this.setState({ password: value })}/> 
        }
      </div>
    )
  }
}

export default Home;