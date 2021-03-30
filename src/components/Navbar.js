import React from 'react'
import Img from '../img/IMG_1898.jpg';
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div className="NavBar">
      <nav className="nav">
      <div className="profile">
        <img src={Img} alt="" />
      </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" react activeClassName="active">
                Home
            </NavLink>
           </li> 
          <li className="nav-item">
            <NavLink to="/about" react activeClassName="active">
                About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" react activeClassName="active">
                Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" react activeClassName="active">
                Contact
            </NavLink>
          </li>

        </ul>
      </nav>
      <footer className= "footer">
          <p>
              @2021 Lorem Ipsum

          </p>
      </footer>
      
    </div>
  )
}

export default Navbar;

