import React, { Component } from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
 } from 'react-router-dom';
import Routes from './Routes'
import './style.scss';

class App extends Component {
    render() {
      return (
        <React.StrictMode>
          <BrowserRouter>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <Routes/>
          </BrowserRouter> 
        </React.StrictMode>);
    }
  }

render(<App />, document.getElementById("root"));