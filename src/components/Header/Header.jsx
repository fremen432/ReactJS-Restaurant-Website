import React from 'react'

export default function Header() {
  return (
    <div id="SECTION__Header" className="Header box">
        <div className="logo box">
            <a href="#Home">
                <img className="logo" src="assets/Simply-Pho-House.png" alt="restaurant logo" />
            </a>
        </div>
        <ul className="navbar_elements">
            <li><a href="#Home">Home</a></li>
            <li><a href="#Menu">Menu</a></li>
            <li><a href="#">Order</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
    </div>
  )
}
