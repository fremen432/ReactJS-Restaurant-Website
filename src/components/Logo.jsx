import { Link } from 'react-router-dom';

import logoImg from "../assets/Simply-Pho-House.png"
import logoImgSmall from "../assets/Simply-Pho-House-small.png"

import { useState, useEffect } from "react";

// tailwind breakpoints
// sm	@media (min-width: 640px)
// md	@media (min-width: 768px)
// lg	@media (min-width: 1024px)
// xl	@media (min-width: 1280px)
// 2xl	@media (min-width: 1536px)

const twVW_sm = 640;
// const twVW_md = 768;
// const twVW_lg = 1024;
// const twVW_xl = 1280;
// const twVW_2xl = 1536;

export default function Logo(props) {
    const { position, classes } = props;
    const aTagClasses = 'Logo_Header '

    const smallLogo = () => <img className={"Logo box " + classes} src={logoImgSmall} alt="restaurant Logo" />;
    const largeLogo = () => <img className={"Logo box " + classes} src={logoImg} alt="restaurant Logo" />;

    // The size of the list
    // It will be updated later
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    // This function calculates width and height of the list
    const getListSize = () => {
        const newWidth = window.innerWidth;
        setWidth(newWidth);

        const newHeight = window.innerHeight;
        setHeight(newHeight);
    };

    // Update 'width' and 'height' when the window resizes
    useEffect(() => {
        window.addEventListener("resize", getListSize);
    }, []);

    const isSmall = () => {
        if (position != 'header') return largeLogo();
        else 
        if (width < twVW_sm || window.innerWidth < twVW_sm) return smallLogo()
        else return largeLogo()
    }

    return(
        <>
            { isSmall() }
        </> 
    )
}