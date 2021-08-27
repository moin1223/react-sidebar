import React from 'react';
import Sidebar from './Sidebar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Reports from '../pages/Reports';
import Products from '../pages/Products'
import DashboardNabvar from '../pages/DashboardNabvar';


const Dashboard = () => {
 
    return (
        <>
     <DashboardNabvar/>
      <div className="row">
      <Sidebar/>

    
     <Route path="/dashboard/report">
     
       <Reports/>
   
     </Route>
     <Route path="/dashboard/products">
       <Products/>
     </Route>
     
    
     </div>
       

        
        </>
    );
};

export default Dashboard;