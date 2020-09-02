import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx';
import FullProject from './pages/FullProject.jsx'
import Contact from './pages/Contact';
function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/portfolio' component={Portfolio}></Route>
                    <Route path='/full-project/:index' component={FullProject}></Route>

                    <Route path='/contact-me' component={Contact}></Route>
                    
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
