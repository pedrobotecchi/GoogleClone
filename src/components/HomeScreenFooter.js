import React, { Component } from 'react';
import '../styles/styles.css';

class HomeScreenFooter extends Component {
  render () {
    return(
      <footer className="footer">
        <div className="footer__address">
          <span className="footer__text">Brazil</span>
        </div>
        <div className="footer__link">
          <section className="footer__link__left">
            <a className="footer__text" rel="noreferrer" target="_blank" href="https://about.google/?utm_source=google-BR&utm_medium=referral&utm_campaign=hp-footer&fg=1">About</a>
            <a className="footer__text" rel="noreferrer" target="_blank" href="https://ads.google.com/intl/en_br/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Advertising</a>
            <a className="footer__text" rel="noreferrer" target="_blank" href="https://smallbusiness.withgoogle.com/intl/pt-BR_br/help/#!/">Business</a>
            <a className="footer__text" rel="noreferrer" target="_blank" href="https://www.google.com/search/howsearchworks/?fg=1">How Search Works</a>
          </section>
            <section className="footer__link__right">
              <a className="footer__text" rel="noreferrer" target="_blank" href="https://policies.google.com/privacy?hl=en-BR&fg=1">Privacy</a>
              <a className="footer__text" rel="noreferrer" target="_blank" href="https://policies.google.com/terms?hl=en-BR&fg=1">Terms</a>
              <button className="footer__text" rel="noreferrer" target="_blank">Settings</button>
            </section>  
        </div>
      </footer>
    )
  }
}

export default HomeScreenFooter;