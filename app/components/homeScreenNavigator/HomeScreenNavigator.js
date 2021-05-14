import React, { Component } from 'react';
import './style.scss';

// Icons
import MoreIcon from '../../icons/more-icon.svg';
import Avatar from '../../icons/Pedro.svg'

// Constants
import { HomeNavLink } from '../../constants/linkReferences';

class HomeScreenNavigator extends Component {
  render () {
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
            <button className="menu__profile">
              <img className="menu__avatar" alt="Avatar Icon" src={Avatar}/>
            </button>    
          </section>
        </nav>
      </header>
    )
  }
}

export default HomeScreenNavigator;