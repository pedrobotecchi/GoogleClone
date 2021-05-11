import React, { Component } from 'react';
import '../styles/styles.css';
import { showAlert } from '../lib/utils';

class Paginator extends Component {

  render () {
    return(
      <section className="result__paginator">
        <span className="paginator__letter">G</span>
        <div className="paginator__index">
          <span className="paginator__letter index active">o</span>
          <button className="paginator__link active" onClick={showAlert}>1</button>
          </div>
          <div className="paginator__index">
              <span className="paginator__letter index">o</span>
              <button className="paginator__link" onClick={showAlert}>2</button>
          </div>
          <div className="paginator__index">
              <span className="paginator__letter index">o</span>
              <button className="paginator__link" onClick={showAlert}>3</button>
          </div>
          <div className="paginator__index">
              <span className="paginator__letter index">o</span>
              <button className="paginator__link" onClick={showAlert}>4</button>
          </div>
          <div className="paginator__index">
              <span className="paginator__letter index">o</span>
              <button className="paginator__link" onClick={showAlert}>5</button>
          </div>
          <div className="paginator__index">
              <span className="paginator__letter index">o</span>
              <button className="paginator__link" onClick={showAlert}>6</button>
          </div>
          <div className="paginator__index">
              <span className="paginator__letter index">o</span>
              <button className="paginator__link" onClick={showAlert}>7</button>
          </div>
          <div className="paginator__index">
              <span className="paginator__letter index">o</span>
              <button className="paginator__link" onClick={showAlert}>8</button>
          </div>
          <div className="paginator__index">
              <span className="paginator__letter index">o</span>
              <button className="paginator__link" onClick={showAlert}>9</button>
          </div>
          <div className="paginator__index">
              <span className="paginator__letter index">o</span>
              <button className="paginator__link" onClick={showAlert}>10</button>
          </div>
          <span className="paginator__letter index" style={{color: "blue", marginTop: "4px"}}>g</span>
          <span className="paginator__letter index" style={{color: "green", marginTop: "4px"}}>l</span>
          <span className="paginator__letter index" style={{color: "red", marginTop: "4px"}}>e</span>
          <div className="paginator__index" style={{marginLeft: "10px", cursor: "pointer"}} onClick={this.showAlert}>
              <span className="paginator__letter index" style={{fontSize: "20px", marginBottom: "2px", marginTop: "8px", color: "blue"}}>></span>
              <button className="paginator__link">mais</button>
          </div>
      </section>
    )
  }
}

export default Paginator;