import { useState } from 'react';

import Logo from '../../../../misc-componenets/Logo';

const Header__element = 'Header_element rounded-xl '

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
        isOpen == true && setIsOpen(false) 
      }
    }

    return(
        <li  className="dropdown ">
            <button id="dropdown_btn" className={Header__element} onClick={ isOpen_Toggle } >Order</button>
            <div className="">

                <ul className={"dropdown-content " + (
                    isOpen == false ? 'animate_UP hidden ' : 
                    isOpen == true ? "animate_DOWN block ":
                    'hidden '
                )}>
                    <li><a className="dropdown-location box" href="/order">Dripping Springs</a></li>
                    <li><a className="dropdown-location box" href="/order">Bee Cave</a></li>
                    <li><a className="dropdown-location box" href="/order">Marble Falls</a></li>
                </ul>
            </div>
        </li>
    )
}

export default function Header(props) {
    const { setIsOpen, isOpen } = props
    return (
        <div className="HP_Header">

            <Logo classes={"logo_HP_Header box " } position='header' />

            <ul className="navbar_elements text-sm box sm:text-md mx-2 sm:mr-8">
                <li><a className={Header__element + ''}  href="#Home">Home</a></li>
                <li><a className={Header__element + ''} href="#Menu">Menu</a></li>
                <DropDown setIsOpen={setIsOpen} isOpen={isOpen} />
                <li><a className={Header__element + ''} href="#Contact">Contact</a></li>
            </ul>
        </div>
    )
}
