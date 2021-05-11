import React, { Component } from 'react';
import '../styles/styles.css';

class RelatedSearch extends Component {
  // Function that will redirect the user when clicked in the related fields
  redirectSearch = (e) => {
    const { target : { childNodes } } = e;
    const newSearchText = childNodes[childNodes.length -1].innerHTML
    //console.log(childNodes[childNodes.length -1].data);
    window.location.href = `/searchResult/${newSearchText}`;
  }

  render () {
    const { search } = this.props;
    return(
      <div className="related__search">
        <div className="related__boxline">
          <div id="box1" className="related__box" onClick={this.redirectSearch}>
            <span className="material-icons" style={{color: "gray", pointerEvents: "none"}}>search</span>
            <span id="text1" className="related__text">{`${search} funding`}</span>
          </div>
          <div id="box2" className="related__box" onClick={this.redirectSearch}>
            <span className="material-icons" style={{color: "gray"}}>search</span>
            <span id="text2" className="related__text">{`${search} careers`}</span>
          </div>
        </div>
        <div className="related__boxline">
          <div id="box3" className="related__box" onClick={this.redirectSearch}>
            <span className="material-icons" style={{color: "gray"}}>search</span>
            <span id="text3" className="related__text">{`${search} glassdoor`}</span>
          </div>
          <div id="box4" className="related__box" onClick={this.redirectSearch}>
            <span className="material-icons" style={{color: "gray"}}>search</span>
            <span id="text4" className="related__text">{`${search} zoominfo`}</span>
          </div>
        </div>
        <div className="related__boxline" style={{alignSelf: "flex-start"}}>
          <button id="box5" className="related__box" onClick={this.redirectSearch}>
            <span className="material-icons" style={{color: "gray"}}>search</span>
            <span id="text5" className="related__text">{`${search} honda`}</span>
          </button>
        </div>
      </div>
    )
  }
}

export default RelatedSearch;