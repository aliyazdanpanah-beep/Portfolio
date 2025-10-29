import { useState } from 'react';
import Nav from '../navbar/navbar';
import './menu.css'

const Menu = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  
  const toggleNav = () => {
    const Navbar = document.getElementById('NavWrapper');
    setIsNavVisible(!isNavVisible);
    
    if (Navbar) {
      if (isNavVisible) {
        Navbar.style.top = '-100px';
        Navbar.style.transition = 'all ease-in 1s'
      } else {
        Navbar.style.top = '0';
        Navbar.style.transition = 'all ease-in 1s'
      }
    }
  };

  return (
    <>
      <Nav />
      <div onClick={toggleNav} className="MenuIcon">
        <div className="MenuWrapper">
          <div className="MenuLine"></div>
          <div className="MenuLine"></div>
        </div>
      </div>
    </>
  );
}

export default Menu;