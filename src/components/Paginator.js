import React, { Component } from 'react';
import '../styles/styles.css';

class Paginator extends Component {
  render () {
    return(
      <section className="result__paginator">
        <span className="paginator__letter">G</span>
        <div className="paginator__index">
          <span className="paginator__letter index active">o</span>
          <button className="paginator__link active" onclick="showAlert()">1</button>
          </div>
          <div className="paginator__index">
              <span className="paginator__letter index">o</span>
              <button className="paginator__link" onclick="showAlert()">2</button>
          </div>
          <div className="paginator__index">
              <span className="paginator__letter index">o</span>
              <button className="paginator__link" onclick="showAlert()">3</button>
          </div>
          <div className="paginator__index">
              <span className="paginator__letter index">o</span>
              <button className="paginator__link" onclick="showAlert()">4</button>
          </div>
          <div className="paginator__index">
              <span className="paginator__letter index">o</span>
              <button className="paginator__link" onclick="showAlert()">5</button>
          </div>
          <div className="paginator__index">
              <span className="paginator__letter index">o</span>
              <button className="paginator__link" onclick="showAlert()">6</button>
          </div>
          <div className="paginator__index">
              <span className="paginator__letter index">o</span>
              <button className="paginator__link" onclick="showAlert()">7</button>
          </div>
          <div className="paginator__index">
              <span className="paginator__letter index">o</span>
              <button className="paginator__link" onclick="showAlert()">8</button>
          </div>
          <div className="paginator__index">
              <span className="paginator__letter index">o</span>
              <button className="paginator__link" onclick="showAlert()">9</button>
          </div>
          <div className="paginator__index">
              <span className="paginator__letter index">o</span>
              <button className="paginator__link" onclick="showAlert()">10</button>
          </div>
          <span className="paginator__letter index" style={{color: "blue", marginTop: "4px"}}>g</span>
          <span className="paginator__letter index" style={{color: "green", marginTop: "4px"}}>l</span>
          <span className="paginator__letter index" style={{color: "red", marginTop: "4px"}}>e</span>
          <div className="paginator__index" style={{marginLeft: "10px", cursor: "pointer"}} onclick="showAlert()">
              <span className="paginator__letter index" style={{fontSize: "20px", marginBottom: "2px", marginTop: "8px", color: "blue"}}>></span>
              <button className="paginator__link">mais</button>
          </div>
      </section>
    )
  }
}

export default Paginator;