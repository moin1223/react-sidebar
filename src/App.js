import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './components/Dashboard';




function App() {
 
  return (
    <>
    
      <Router>
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>

          </Route>
   
        </Switch>
      </Router>
    
    </>
  );
}

export default App;