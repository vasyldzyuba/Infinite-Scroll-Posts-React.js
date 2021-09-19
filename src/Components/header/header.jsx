import React from "react";
import SearchIcon from '../../images/search.png';
import Iframe from '../../images/Frame 1235.png';
import logo from '../../images/logo (1).png';
import hum from '../../images/Frame 230.png';
export function Header() {
  return (
    <>
      <header className="mini-header">
        <img src={logo} alt="logo" />
        <div>
          <img src={SearchIcon} alt='search' />
          <img src={hum} alt='hum' />
        </div>
      </header>
      <header>
        <nav>
          <ul>
            <li>Discover</li>
            <li>My Plants</li>
            <li>Diseases</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <div>
          <img src={SearchIcon} alt='search' />
          <img src={Iframe} alt='profile' />
        </div>
      </header> </>)
}
