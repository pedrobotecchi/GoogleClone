import React, { Component } from 'react';
import './style.scss';

// Icons
import GoogleLogo from '../../icons/google-2015.svg';
import Avatar from '../../icons/Pedro.svg'
import MoreOptionsIcon from '../../icons/more-icon.svg'
import XIcon from '../../icons/xIcon.svg';
import Icon from '@material-ui/core/Icon';

// Constants
import { SearchResultNavLink } from '../../constants/linkReferences';

const styles = {
  iconStyle : {
    color: 'grey',
  },
  firstIcon : {
    marginLeft: "13%",
  },
  moreIconStyle : {
    marginLeft: "32px",
    marginRight: "12px"
  }
}

class SearchScreenNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText : props.search || '',
    }
  }

  // Function that will get the string to search
  searchInputAction = (e) => {
    const { target : { value }, key } = e;
    if(!key || key === 'Enter') {
      this.setState({ searchText: value }, () => window.location.href = `/searchResult/${value}`);
    }
    else{
      this.setState({ searchText: value });
    }
  }

  showAlert = (id) => {
    alert('You clicked on : ' +  id);
  }

  renderNavButtons = (element, index) => {

    return (
    <button key={index} className={element.className} style={element.style ? styles[element.style] : null} onClick={element.onClick ? () => {this.showAlert(element.text)} : null}>
      {
        element.icon ? <Icon style={styles.iconStyle}>{element.icon}</Icon> : 
        <span className="material-icons" style={styles.iconStyle}>{element.span}</span>
      }
      {element.text}
    </button>
    )
  }

  render () {
    const { search } = this.props; 
    
    return(
      <div>
      <header className="menu__search">
        <section className="menu__section__left">
          <div className="menu__logo">
              <img className="menu__img" src={GoogleLogo} alt="Google logo"/>
          </div>
          <div className="menu__bar">
            <input id="userSearch" className="content__input" onKeyPressCapture={this.searchInputAction}  style={{ marginLeft: "30px", width: "533px", border: "unset"}} type="text" defaultValue={search || null} placeholder="Search Google or type a URL" />
            <button style={{marginRight: "12px", cursor: "pointer"}}>
                <img src={XIcon} alt="cancel search" height="24px" width="24px"/>
            </button>
            <div className="division"></div>
            <button style={{color:"royalblue", marginRight: "12px"}} onClick={this.showAlert}>
                <span className="material-icons" style={{cursor: "pointer"}}>mic</span>
            </button>
            <button style={{marginRight: "12px", cursor: "pointer"}} onClick={this.searchInputAction}>
                <span className="material-icons" style={{color: "gray"}}>search</span>
            </button>
          </div>
        </section>
        <section className="menu__section__right">
          <img className="menu__icon" src={MoreOptionsIcon} alt="More options" />
          <button className="menu__profile" >
            <img className="menu__avatar" src={Avatar} alt="Avatar Icon" />
            <div id="menu__modal" style={{paddingTop: "80px"}} className="menu__modal">
              <div id="modal__box" className="modal__box">
                <span>Insert SOMETHING HERE!!</span>
              </div>
            </div>
          </button>  
        </section>
      </header>
      <nav className="menu__search__link">
        {
          SearchResultNavLink.map( (element, index) => this.renderNavButtons(element,index))
        }
      </nav>
    </div>
    )
  }
}

export default SearchScreenNavigator;