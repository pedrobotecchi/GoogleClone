import React, { Component } from 'react';
import './style.scss';

// Constants
import { HomeFooterLeftLink } from '../../constants/linkReferences';
import { HomeFooterRightLink } from '../../constants/linkReferences';

class HomeScreenFooter extends Component {

  renderLink = (className, element, index) => {
    return  <a key={element.link + index} className={className} rel="noreferrer" target="_blank" href={element.href}>{element.link}</a>
  }

  render () {
    return(
      <footer className="footer">
        <div className="footer__address">
          <span className="footer__text">Brazil</span>
        </div>
        <div className="footer__link">
          <section className="footer__link__left">
            { HomeFooterLeftLink.map((element, index) => this.renderLink('footer__text', element, index)) }
          </section>
            <section className="footer__link__right">
              { HomeFooterRightLink.map((element, index) => this.renderLink('footer__text', element, index)) }
              <button className="footer__text" rel="noreferrer" target="_blank">Settings</button>
            </section>  
        </div>
      </footer>
    )
  }
}

export default HomeScreenFooter;