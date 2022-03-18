import { useState } from 'react';

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isOpen_Toggle = () => isOpen == false ? setIsOpen(true) : setIsOpen(false)

    return(
        <li  className="dropdown">
            <button onClick={isOpen_Toggle} >Order</button>
            {/* <button onClick={() => console.log(isOpen)} >CLG</button> */}
            <ul className={"dropdown-content " + (isOpen == false ? "hidden" : "block")}>
            {/* <ul className={"dropdown-content hidden focus:block"}> */}
                <li className="dropdown-location"><a href="/order">Dripping Springs</a></li>
                <li className="dropdown-location"><a href="/order">Bee Cave</a></li>
                <li className="dropdown-location"><a href="/order">Marble Falls</a></li>
            </ul>
        </li>
    )
}

export default function Header() {

    return (
        <div id="SECTION__Header" className="HP_Header box">
            <div className="logo">
                <a href="/">
                    <img className="" src="assets/Simply-Pho-House.png" alt="restaurant logo" />
                </a>
            </div>
            <ul className="navbar_elements">
                <li><a href="#Home">Home</a></li>
                <li><a href="#Menu">Menu</a></li>
                <DropDown />
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    )
}
