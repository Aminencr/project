import React from 'react'
//import { Redirect } from 'react-router-dom'
import Dashboard from './admin/Dashboard';


import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Users from './admin/Users';
import Clubpresident from './admin/Clubpresident';
import Clubprofil from './admin/Clubprofil';
import Email from './admin/Email';

function Admin() {
    return (
        <Router>
        <Switch>
        <Route exact path="/admin" component={Dashboard}/>
          <Route exact path="/admin/users" component={Users}/>
          <Route exact path="/admin/clubpresidents" component={Clubpresident}/>
          <Route exact path="/admin/clubprofil" component={Clubprofil}/>
          <Route exact path="/admin/inbox" component={Email}/>



          

        
        </Switch>
    </Router>
    )
}

export default Admin
