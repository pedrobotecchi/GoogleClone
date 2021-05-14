import React, { Component } from 'react';
import './style.scss';

// Icons
import DaitanImage from '../../icons/photo.png';
import Star from '../../icons/star.svg';

// Constants
import { SearchButtons } from '../../constants/searchInfoConstants';
import { CommentUsers } from '../../constants/searchInfoConstants';

class SearchInfoSection extends Component {
  constructor(props){
    super(props);
  }

  showAlert = (e) => {
    const { target : { innerHTML } } = e;
    alert(`You clicked on : ${innerHTML}`);
  }

  renderButton = () => {
    return (
      <div className="search__info__button">
        { SearchButtons.map(element => <button className={element.className} onClick={this.showAlert}>{element.text}</button>) }
      </div>
    )
  }

  renderStars = () => {
    return (<div><img src={Star} alt="Star"/><img src={Star} alt="Star"/><img src={Star} alt="Star"/><img src={Star} alt="Star"/><img src={Star} alt="Star"/></div>);
  }

  renderLocationSection = () => {
    return(
      <section className="search__info__box">
        <span className="search__text">Located in: </span>Galeria Shopping <br/><br/>
        <span className="search__text">Address: </span>Galleria Office Park Ed. 1, Cj. 101, Av. Bailarina Selma Parada, 201 - Jardim Madalena, Campinas - SP, 13091-904<br/><br/>
        <span className="search__text">Hours: </span><span className="search__text" style={{fontWeight: "unset", color: "gray"}}>Open</span> ⋅ Closes 5PM<br/><br/>
        <span className="search__text">Phone: </span><span style={{color: "blue"}}>(19) 3707-9610</span><br/><br/>
        <div className="search__link">
          <button>Suggest a change</button>
          <a rel="noreferrer" target="_blank" style={{textDecoration: "none"}} href="https://business.google.com/create?hl=pt-BR&getstarted&fp=16205024449776930631&gmbsrc=br-pt-BR-et-ip-z-gmb-s-z-l~skp%7Cclaimbz_aoc_a%7Cu%7Cexp&ppsrc=GMBSI"> · Own this business?</a>
        </div> 
      </section>
    )
  }

  renderComments = (element) => {
    return ( 
      <div className="search__comment__item">
        <img className="menu__avatar" src={element.avatar} alt="Avatar"/>
        <div className="search__comment_text">
          <span>{element.comment}</span>
          <div className="star__container">
            { this.renderStars() }
          </div>
        </div>
      </div>
    )
  }

  render () {
    const { search } = this.props;
    const capitalizedSearchString = search[0].toUpperCase() + search.slice(1);
    return(
      <section className="search__info">

        <div className="search__info__image">
          <img src={DaitanImage} style={{height: "100px", width: "275px"}} alt="Daitan"></img>
          <img src={DaitanImage} style={{height: "100px", width: "275px"}} alt="Daitan"></img>
        </div>

        <div className="search__name__box">
          <span id="searchSpan" style={{fontSize: "25px"}}>{capitalizedSearchString}</span>
          <img className="menu__avatar" src={DaitanImage} alt="Search Avatar"/>
        </div>

        { this.renderButton() }

        <section className="rating">
          <div className="search__rating">
            <span style={{fontSize: "24px"}}>4.8</span>
            { this.renderStars() }
            <span style={{fontSize: "12px", marginLeft: '6px'}}>155 comentários no Google</span>
          </div>
          <span className="search__label">Empresa de software em Campinas, São Paulo</span>
        </section>

        { this.renderLocationSection() }

        <section className="search__question">
          <div className="search__question__text">
            <span className="search__title">Questions & answers</span>
            <span className="search__link">View all questions (1)</span>
          </div>
          <div className="search__button">
            <button>Ask a question</button>
          </div>   
        </section>

        <section className="search__webrating">
          <span className="search__title">Web Ratings</span>
          <div className="search__webrating__text">
              <a target="_blank" rel="noreferrer" href="https://pt-br.facebook.com/daitangroupbr" className="search__title" style={{ marginRight: "12px", color: "gray"}}>5/5</a>
              <span className="search__link" style={{marginRight: "8px"}}>Facebook</span>
              <span>45 votes</span>
          </div>
        </section>

        <section className="search__comment">
            <div className="search__comment__head">
              <span className="search__title" style={{alignSelf: "flex-end"}}>Comments</span>
              <div className="search__comment_button">
                <button className="search__button">Comment</button>
                <button className="search__button">Add a photo</button>
              </div>
            </div>
            <div className="search__comment__box">
              { CommentUsers.map(element => this.renderComments(element)) }
              <span className="search__link">View all Google reviews</span>
            </div>
        </section>

      </section>
    )
  }
}

export default SearchInfoSection;