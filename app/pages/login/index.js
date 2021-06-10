import React, { Component } from 'react';
import './style.scss';

import LoginEmail from '../../components/loginEmail';
import LoginPassword from '../../components/loginPassword';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
      switchLayoutToReceivePassword : props.switchLayoutToReceivePassword || false,
      teste: props.switchLayoutToReceivePassword
    }
  }

  logIn = () => {
    //Check if the email and password are ok in the DB and log in using localstorage
  }

  // Function that will get the string to search
  searchInputAction = (e) => {
    const { target : { value }, key } = e;
    const { switchLayoutToReceivePassword } = this.state;
    if(!key || key === 'Enter') {
      //this.setState({ switchLayoutToReceivePassword : !switchLayoutToReceivePassword });
    }
  }

  render() {
    const { switchLayoutToReceivePassword } = this.state;
    console.log('prosp',this.props);
    console.log('state',this.state);
    return (
      <div className="content">
        { !switchLayoutToReceivePassword ? <LoginEmail setEmail={(value) => this.setState({ email: value, switchLayoutToReceivePassword : false })}/> 
        : <LoginPassword email={this.state.email} setPassword={(value) => this.setState({ password: value }, this.logIn())}/> 
        }
      </div>
    )
  }
}

export default Login;