import React, { Component } from 'react';
import './style.scss';
import {useHistory} from "react-router-dom";

import LoginEmail from '../../components/loginEmail';
import LoginPassword from '../../components/loginPassword';

// Redux-Saga
import { checkLogin } from '../../actions'
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
      switchLayoutToReceivePassword : props.switchLayoutToReceivePassword || false,
      submittedPassword: false
    }
  }

  searchUserInDB  = (password) => {
    //Check if the email and password are ok in the DB and log in using localstorage
    const dispatch = this.props.dispatch();
    dispatch(checkLogin({ email: this.state.email, password: password }));
  }

  // Function that will get the string to search
  searchInputAction = (e) => {
    const { key } = e;
    const { switchLayoutToReceivePassword } = this.state;
    if(!key || key === 'Enter') {
      this.setState({ switchLayoutToReceivePassword : !switchLayoutToReceivePassword });
    }
  }

  render() {
    const { switchLayoutToReceivePassword, submittedPassword } = this.state;
    const userIsInBD = this.props.selector().loginReducer.userIsInBD;
    return (
      <div className="content">
        { !switchLayoutToReceivePassword ? <LoginEmail setEmail={(value) => this.setState({ email: value, switchLayoutToReceivePassword : !switchLayoutToReceivePassword })}/> 
        : <LoginPassword email={this.state.email} setPassword={(value) => this.setState({ password: value, submittedPassword: true }, this.searchUserInDB(value) )}
            goBackToEmail={() => this.setState({switchLayoutToReceivePassword : !switchLayoutToReceivePassword})}/> 
        }
        {userIsInBD ? window.location.href = `/` : submittedPassword ? <p>Usuário e/ou senha inválidos</p> : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);