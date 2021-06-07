import React, { Component } from 'react';
import './style.scss';

// Icons
import GoogleLogo from '../../icons/google-2015.svg'


class LoginEmail extends Component {


  // Function that will get the string to search
  inputEmailAction = (e) => {
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
    return(
      <div className="content__login">
        <img className="content__login__logo" alt="Google logo" src={GoogleLogo}/>
        <span className="content__title">Fazer Login</span>
        <span className="content__subtitle" >Use sua Conta do Google</span>
        <input className="content__email__input" placeholder="E-mail" onKeyPressCapture={this.inputEmailAction}></input>
        <button className="button__link">Esqueceu seu e-mail?</button>
        <span className="login__text">
          Não está no seu computador? Use o modo visitante para fazer login com privacidade.
          <button className="button__link" style={{ margin: '0px' }}>Saiba mais</button>
        </span>
        <div className="login__button">
          <button className="button__link" style={{ margin: '0px' }}>Criar conta</button>
          <button className="button__link__next" style={{ margin:'0px' }} onClick={this.inputEmailAction} >Próxima</button>
        </div>
      </div>   
    )
  }
}

export default LoginEmail;

 