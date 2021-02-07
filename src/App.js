import React from 'react';
import './App.css';
import Nav from './Nav';
import Main from './Pages/Main';
import About from './Pages/About';
import Projects from './Pages/Projects';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
