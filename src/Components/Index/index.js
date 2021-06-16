import React  , {Component} from 'react';


import Home from './../F2-Home/index';
import Work from './../F3-Work/index';
import Portfolio from './../F4-Portfolio/index';
import Profile from './../F5-Profile/index';
import About from './../F6-About/index';
import SocialMedia from './../F7-SocialMedia/index';
import Footer from './../F8-Footer/index';


class Index extends Component{

  render(){
    return (

      <div>
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
      </div>
      
    );
  }

}

export default Index;



