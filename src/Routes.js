import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchResult from './screens/SearchResult';
import Home from './screens/Home';

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