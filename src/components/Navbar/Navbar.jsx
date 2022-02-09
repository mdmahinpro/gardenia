import React from 'react';
import images from '../../constants/images';
import './Navbar.css';


const Navbar = () => (
  <nav className='app__navbar'>
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="" />
    </div>
  </nav>
);

export default Navbar;
