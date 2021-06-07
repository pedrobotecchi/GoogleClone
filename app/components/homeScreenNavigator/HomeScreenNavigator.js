import React, { Component } from 'react';
import './style.scss';

// Icons
import MoreIcon from '../../icons/more-icon.svg';
import Avatar from '../../icons/Pedro.svg'

// Constants
import { HomeNavLink } from '../../constants/linkReferences';

class HomeScreenNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderLoginModal: false,
      hasLogin: false,
    }
  }

  render () {
    const { hasLogin, renderLoginModal } = this.state;
    return(
      <header className="menu">
        <nav>
          <section className="menu__section__right">
            { 
              HomeNavLink.map((element, index) => {
                return <a key={'menu_link__'+index} className="menu__link" rel="noreferrer" href={element.href} target="_blank">{element.link}</a>
              }) 
            }
            <img className="menu__icon" src={MoreIcon} alt="More Options" />
            <button className={hasLogin ? "menu__profile" : "menu__profile__notLogged"} onClick={() => { this.setState({ renderLoginModal: !renderLoginModal }) }}>
            <span className="button__text" onClick={() =>  window.location.href = `/login`} >Fazer Login</span>
            { hasLogin ? (
              <div>
                <img className="menu__avatar" src={Avatar} alt="Avatar Icon" />
                <div id="menu__modal" style={{ display: renderLoginModal ? 'flex' : 'none'}} className="menu__modal">
                  <div id="modal__box" className="modal__box">
                    <span>Insert SOMETHING HERE!!</span>
                  </div>
                </div>
              </div>)
             : null } 
          </button>      
          </section>
        </nav>
      </header>
    )
  }
}

export default HomeScreenNavigator;