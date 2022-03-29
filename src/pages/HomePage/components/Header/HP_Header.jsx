import { useState } from 'react';

import Logo from '../../../../misc-componenets/Logo';

const Header__element = 'Header_element  '

const DropDown = (props) => {
    const [isOpen, setIsOpen] = useState('start');
    const isOpen_Toggle = () => {
        setIsOpen(
            isOpen == false ? true : 
            isOpen == true ? false :
            true );
    }

    document.onclick = (e) => {
      if (e.target.id !== 'dropdown_btn') { 
        console.log(isOpen);
        setIsOpen(false) 
      }
    }

    return(
        <li  className={Header__element + "dropdown "}>
            <button id="dropdown_btn" className="dropdown__button" onClick={ isOpen_Toggle } >Order</button>
            <div className="">

                <ul className={"dropdown-content " + (
                    isOpen == false ? "animate_UP" : 
                    isOpen == true ? "animate_DOWN ":
                    'hidden'
                )}>
                    <li className="dropdown-location "><a href="/order">Dripping Springs</a></li>
                    <li className="dropdown-location"><a href="/order">Bee Cave</a></li>
                    <li className="dropdown-location"><a href="/order">Marble Falls</a></li>
                </ul>
            </div>
        </li>
    )
}

export default function Header(props) {
    const { setIsOpen, isOpen } = props
    return (
        <div className="HP_Header">

            <Logo classes={"logo_HP_Header box " }/>

            <ul className="navbar_elements text-sm box sm:text-md mx-2 sm:mr-8">
                <li className={Header__element + ''} ><a href="#Home">Home</a></li>
                <li className={Header__element + ''}><a href="#Menu">Menu</a></li>
                <DropDown setIsOpen={ setIsOpen } isOpen={ isOpen } />
                <li className={Header__element + ''}><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    )
}
