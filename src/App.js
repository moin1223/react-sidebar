import React, { createContext, useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './components/Dashboard';

export const UserContext = createContext();





function App() {
  const [show,setShow] = useState()
 
  return (
    <>
     <UserContext.Provider value={[show,setShow]}>
    
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
      </UserContext.Provider>
    
    </>
  );
}

export default App;