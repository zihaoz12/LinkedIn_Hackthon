import React from 'react';
import {Route,Switch,} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import HomeFeed from './Components/HomeFeed';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/home' component={HomeFeed}/>
    </Switch>
  );
}

export default App;
