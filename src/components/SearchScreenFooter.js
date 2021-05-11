import React, { Component } from 'react';
import '../styles/styles.css';

class SearchScreenFooter extends Component {
  render () {
    return(
      <footer>
        <div className="footer__address" style={{ padding: "12px 0px 8px 13%"}}>
          <span className="footer__text">Brazil</span>
          <div className="footer__division" ></div>
          <span className="footer__text" style={{color: "black", fontsize: "14px"}}>13483, Limeira - State of São Paulo</span>
          <span className="footer__text"> - From your Internet address</span>
          <span className="footer__text"> - Use precise location</span>
          <span className="footer__text"> - Learn more</span>
        </div>
        <div className="footer__link" style={{padding: "12px 0px 8px 13%"}}>
          <section className="footer__link__left"> 
            <a className="footer__text" href="https://support.google.com/websearch/?visit_id=637552983631378540-3352918307&hl=en-BR&rd=2#topic=3378866" target="_blank" >Help</a>
            <a className="footer__text" style={{marginLeft: "12px"}} target="_blank">Send Feedback</a>
            <a className="footer__text" style={{marginLeft: "12px"}} target="_blank" href="https://policies.google.com/privacy?hl=en-BR&fg=1">Privacy</a>
            <a className="footer__text" style={{marginLeft: "12px"}} target="_blank" href="https://policies.google.com/terms?hl=en-BR&fg=1">Terms</a>
          </section> 
        </div>          
    </footer>
    )
  }
}

export default SearchScreenFooter;