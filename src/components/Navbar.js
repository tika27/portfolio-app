import React from 'react'
// import avatar from '..'
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div className="NavBar">
      <div className="profile">
        {/* <img src={avatar} alt="" /> */}
      </div>
      <nav className="nav">
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
      
    </div>
  )
}

export default Navbar;

