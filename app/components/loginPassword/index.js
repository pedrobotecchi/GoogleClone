import React, { Component } from 'react';
import './style.scss';

// Icons
import GoogleLogo from '../../icons/google-2015.svg'

import Icon from '@material-ui/core/Icon';

class LoginPassword extends Component {


  // Function that will get the string to search
  inputPasswordAction = (e) => {
    const { target : { value }, key } = e;
    if(!key || key === 'Enter') {
      const { setEmail } = this.props;
      setEmail ? setEmail(value) : null;
    }
    else{
      this.setState({ searchText: value });
    }
  }

  render () {
    const { email } = this.props;
    return(
      <div className="content__login">
        <img className="content__login__logo" alt="Google logo" src={GoogleLogo}/>
        <span className="content__title">Olá!</span>
        <button className="content__email">
          <div>
            <Icon style={{ marginRight:'6px' }}>account_circle</Icon>
            <span style={{ fontSize:'16px', verticalAlign:'super' }}>{email}</span>
          </div>
        </button>
        <input className="content__password__input" type="password" placeholder="Digite sua senha" onKeyPressCapture={this.inputPasswordAction}></input>
        <div className="content__checkbox">
          <input type="checkbox" value="Mostrar senha"/>
          <span style={{ marginLeft:'6px' }}>Mostrar senha</span>
        </div>
        <div className="login__button">
          <button className="button__link" style={{ margin: '0px' }}>Esqueceu a senha?</button>
          <button className="button__link__next" style={{ margin:'0px' }} onClick={this.inputPasswordAction} >Próxima</button>
        </div>
      </div>   
    )
  }
}

export default LoginPassword;

 