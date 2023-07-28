import React from 'react';
import './NavBar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdCloseFullscreen } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#whatwedo">What We Do</a></li>
        <li className="p__opensans"><a href="#features">Features</a></li>
        <li className="p__opensans"><a href="#howitworks">How It Works</a></li>
        <li className="p__opensans"><a href="#getApp">Get The App</a></li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#000" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdCloseFullscreen fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#whatwedo" onClick={() => setToggleMenu(false)}>What We Do</a></li>
              <li><a href="#features" onClick={() => setToggleMenu(false)}>Features</a></li>
              <li><a href="#howitworks" onClick={() => setToggleMenu(false)}>How It Works</a></li>
              <li><a href="#getApp" onClick={() => setToggleMenu(false)}>Get The App</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


