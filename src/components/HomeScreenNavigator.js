import React, { Component } from 'react';
import '../styles/styles.css';
import Avatar from '../assets/Pedro.svg'
import MoreOptionsIcon from '../assets/more-icon.svg'

class HomeScreenNavigator extends Component {
  render () {
    return(
      <header className="menu">
        <nav>
          <section className="menu__section__right">
            <a className="menu__link" rel="noreferrer" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank">Gmail</a>
            <a className="menu__link" rel="noreferrer" href="https://www.google.com.br/imghp?hl=en&tab=ri&ogbl" target="_blank">Images</a>
            <img className="menu__icon" src={MoreOptionsIcon} alt="More Options" />
            <button className="menu__profile">
              <img className="menu__avatar" alt="Avatar Icon" src={Avatar}/>
              <div id="menu__modal" className="menu__modal">
                <div id="modal__box" className="modal__box">
                    <span>Insert SOMETHING HERE!!</span>
                </div>
              </div>
            </button>    
          </section>
        </nav>
      </header>
    )
  }
}

export default HomeScreenNavigator;