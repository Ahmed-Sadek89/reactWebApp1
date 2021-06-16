import React from 'react';
import { NavBar , Logo , LogoText , UlList , ListItem , Anchor , NLink} from './style.js';

const Navbar = () => {
  return (
    
    <NavBar>
        
        <div className="container">
            
            <Logo>
                <LogoText>Ultra Profile</LogoText>
            </Logo>
                        
            <UlList>
                <ListItem><NLink to="/" >Home</NLink></ListItem>
                <ListItem><Anchor href="#">Work</Anchor></ListItem>
                <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                <ListItem><Anchor href="#">About</Anchor></ListItem>
                <ListItem><NLink to="/Contact" >Contact</NLink></ListItem>
            </UlList>
        </div>
        
    </NavBar>
  );
}

export default Navbar;
