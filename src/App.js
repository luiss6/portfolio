import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';

function App() {
  return (    
    <Homepage />
      // <Router>
      //   <Switch>
      //     <div>
      //       <Route exact path="/" component={Homepage} />
      //       <Route exact path="/projects" component={Projects} />
      //       <Route exact path="/aboutme" component={AboutMe} />
      //       <Route exact path="/contact" component={Contact} />
      //     </div>
      //   </Switch>
      // </Router>    
  );
}

export default App;
