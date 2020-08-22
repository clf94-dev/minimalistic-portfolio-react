import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';

function App  ()  {
    return (
        <div>
    <Router>     
          <Navbar/>  
          <Switch>
            <Route path = '/' exact></Route>
          </Switch>
          </Router> 
        </div>
    );
}

export default App;
