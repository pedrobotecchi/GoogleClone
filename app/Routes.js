import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchResult from './pages/searchResult/SearchResult';
import Home from './pages/home/Home';

export default () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>

      <Route path="/searchResult/:search" component={SearchResult}/>
    </Switch>
  )
}