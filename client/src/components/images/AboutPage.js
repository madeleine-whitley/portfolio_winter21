import React from 'react';
import logo from './file:///Users/mwhitley/Desktop/photos/IMG_7748.jpg';

console.log(logo); 

const Header = () => {

  return <img src={logo} alt="Headshot" />;
}

export default Header;