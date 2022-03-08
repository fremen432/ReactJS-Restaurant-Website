import React from 'react'

const OrderDropDown = () => 
    <li className="dropdown">
        <span>Order</span>
        <ul className="dropdown-content">
            <li className="dropdown-location"><a href="#">Dripping Springs</a></li>
            <li className="dropdown-location"><a href="#">Bee Cave</a></li>
            <li className="dropdown-location"><a href="#">Marble Falls</a></li>
        </ul>
    </li>

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
            <OrderDropDown/>
            {/* <li><a href="#">Order</a></li> */}
            <li><a href="#Contact">Contact</a></li>
        </ul>
    </div>
  )
}
