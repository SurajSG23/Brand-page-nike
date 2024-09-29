import React from 'react'
import './header.css'
function Header() {
  return (
    <div className='nav' >
        <div className="logo"></div>
        <div className="nav-items">
            <ul>
                <li href="#">MENU</li>
                <li href="#">LOCATION</li>
                <li href="#">ABOUT</li>
                <li href="#">CONTACT</li>
            </ul>
        </div>
        <div>
          <button className="login">Login</button>
        </div>
    </div>
  )
}

export default Header
