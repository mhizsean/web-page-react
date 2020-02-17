import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

import { Switch, Route } from 'react-router-dom';

import Home from './/components/pages/Home';
import About from './components/pages/About';
import Latest from './components/pages/Latest';
import Events from './components/pages/Events';
import Details from './components/pages/Details';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';


function App() {
  return (
    <div>
      <Navbar />
      <br/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/latest" component={Latest}/>
        <Route path="/events" component={Events}/>
        <Route path="/details" component={Details}/>
        <Route path="/contact" component={Contact}/>
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </div>
    
  );
}

export default App;
