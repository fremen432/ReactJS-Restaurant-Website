import { useState } from 'react';

import Logo from '../../../../misc-componenets/Logo';

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isOpen_Toggle = () => setIsOpen(isOpen == false ? true : false)

    return(
        <li  className="dropdown Header__element">
            <button className="dropdown__button" onClick={isOpen_Toggle} >Order</button>
            <ul className={"dropdown-content " + (isOpen == false ? "hidden" : "block")}>
                <li className="dropdown-location"><a href="/order">Dripping Springs</a></li>
                <li className="dropdown-location"><a href="/order">Bee Cave</a></li>
                <li className="dropdown-location"><a href="/order">Marble Falls</a></li>
            </ul>
        </li>
    )
}

export default function Header() {
    return (
        <div id="SECTION__Header" className="HP_Header Header box">

            <Logo classes={ ` logo_HP_Header box ` }/>
            <ul className="navbar_elements">
                <li className="Header__element"><a href="#Home">Home</a></li>
                <li className="Header__element"><a href="#Menu">Menu</a></li>
                <DropDown />
                <li className="Header__element"><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    )
}
