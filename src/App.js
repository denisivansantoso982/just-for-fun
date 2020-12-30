import React, { Component } from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import Header from './components/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="just-for-fun/">
            <Redirect from="just-for-fun/" to="/home" />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/landingPage" component={LandingPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
