import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contacts from './Contacts';

function App() {
  return (    
      <Router>
        <Switch>
          <div>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/contacts" component={Contacts} />
          </div>
        </Switch>
      </Router>    
  );
}

export default App;
