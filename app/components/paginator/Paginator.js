import React, { Component } from 'react';
import './style.scss';

// Constants
import { PaginatorIndex } from '../../constants/paginatorReference';


class Paginator extends Component {

  showAlert = (e) => {
    const { target : { innerHTML } } = e;
    alert(`You clicked on : ${innerHTML}`);
  }

  renderPaginatorItem = (element, index) => {
    if(element.spanClass) {
      return (
        <div key={index} className={element.className}>
          <span key={index} className={element.spanClass}>{element.letter}</span>
          <button className={element.buttonClass} onClick={this.showAlert}>{element.number}</button>
        </div>
      )
    }
    else {
      return (<span key={'index'+index} className={element.className} style={element.style}>{element.letter}</span>);
    }
  }

  render () {
    return(
      <section className="result__paginator">
          {
            PaginatorIndex.map((element,key) => this.renderPaginatorItem(element,key))
          }
          <div className="paginator__index" style={{marginLeft: "10px", cursor: "pointer"}} onClick={this.showAlert}>
              <span key={'teste'} className="paginator__letter index" style={{fontSize: "20px", marginBottom: "2px", marginTop: "8px", color: "blue"}}>{'>'}</span>
              <button className="paginator__link">mais</button>
          </div>
      </section>
    )
  }
}

export default Paginator;