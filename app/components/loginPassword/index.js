import React, { Component } from 'react';
import './style.scss';

// Icons
import GoogleLogo from '../../icons/google-2015.svg'

import Icon from '@material-ui/core/Icon';
class LoginPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: this.props.showPassword || false
    }
  }

  // Function that will get the string to search
  inputPasswordAction = (e) => {
    const { target : { value }, key } = e;
    if(!key || key === 'Enter') {
      const { setPassword } = this.props;
      setPassword ? setPassword(value) : null;
    }
  }

  render () {
    const { email } = this.props;
    const { showPassword } = this.state;
    return(
      <div className="content__login">
        <img className="content__login__logo" alt="Google logo" src={GoogleLogo}/>
        <span className="content__title">Olá!</span>
        <button className="content__email" onClick={() => this.props.goBackToEmail()}>
          <div>
            <Icon style={{ marginRight:'6px' }}>account_circle</Icon>
            <span style={{ fontSize:'16px', verticalAlign:'super' }}>{email}</span>
          </div>
        </button>
        <input className="content__password__input" type={this.state.showPassword ? "text" : "password"} placeholder="Digite sua senha" onKeyPressCapture={this.inputPasswordAction}></input>
        <div className="content__checkbox">
          <input type="checkbox" value="Mostrar senha" defaultChecked={this.state.showPassword} onClick={()=> this.setState({ showPassword: !showPassword})}/>
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

 