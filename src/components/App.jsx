import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home.jsx'
function App  ()  {
    return (
        <div>
    <Router>     
          <Navbar/>  
          <Switch>
            <Route path = '/' exact component={Home}></Route>
          </Switch>
          </Router> 
        </div>
    );
}

export default App;
