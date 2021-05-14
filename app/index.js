import React, { useState } from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
 } from 'react-router-dom';
import Routes from './Routes'
import './style.scss';

function App() {
    return (
    <React.StrictMode>
      <BrowserRouter>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
        <Routes/>
      </BrowserRouter> 
    </React.StrictMode>);
}

render(<App />, document.getElementById("root"));