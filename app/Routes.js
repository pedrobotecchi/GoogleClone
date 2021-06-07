import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchResult from './pages/searchResult/SearchResult';
import Home from './pages/home/Home';
import Login from './pages/login';

export default () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>

      <Route path="/login">
        <Login/>
      </Route> 
      <Route path="/searchResult/:search" component={SearchResult}/>
    </Switch>
  )
}