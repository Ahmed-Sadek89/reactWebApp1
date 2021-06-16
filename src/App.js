import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './App.css';

import Navbar from './Components/F1-Navbar/index';
import Index from './Components/Index/index';
import Contact from './Components/F9-Contact/index';


class App extends Component{

  render(){
    return (

      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Index} />
        <Route path='/Contact' component={Contact} />
      </BrowserRouter>
      
    );
  }

}

export default App;



