import React from 'react';
import logo from './file:///Users/mwhitley/Pictures/Photos%20Library.photoslibrary/private/com.apple.Photos/ExternalEditSessions/1D96EFE0-E628-4847-B384-CDC0ECA696A7/27D76E01-7B26-4F46-B522-86B0413346E7-C9D561AA-BBAC-4DB2-AE62-C83766D804B6.jpeg';

console.log(logo); 

const Header = () => {

  return <img src={logo} alt="Horseshoe Bend" />;
}

export default Header;