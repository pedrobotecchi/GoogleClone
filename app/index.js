import React, { Component } from "react";
import { render } from "react-dom";
import { 
  BrowserRouter,
 } from 'react-router-dom';
import Routes from './Routes'
import './style.scss';

// React redux
import { Provider } from 'react-redux';
import { store } from './store';

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <Routes/>
          </BrowserRouter>
        </Provider> 
      </React.StrictMode>);
  }
}

render(<App />, document.getElementById("root"));