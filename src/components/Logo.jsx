import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logoImg from "../assets/logos/Simply-Pho-House.png";
import logoImgSmall from "../assets/logos/Simply-Pho-House-small.png";

import { TW_VW_sm } from "../assets/constants/tailwindVW";

export default function Logo(props) {
	const { position, classes } = props;
	const aTagClasses = "Logo_Header ";

	const smallLogo = () => (
		<img
			className={"Logo box " + classes}
			src={logoImgSmall}
			alt="restaurant Logo"
		/>
	);
	const largeLogo = () => (
		<img
			className={"Logo box " + classes}
			src={logoImg}
			alt="restaurant Logo"
		/>
	);

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
		if (position != "header") return largeLogo();
		else if (width < TW_VW_sm || window.innerWidth < TW_VW_sm)
			return smallLogo();
		else return largeLogo();
	};

	return <>{isSmall()}</>;
}
