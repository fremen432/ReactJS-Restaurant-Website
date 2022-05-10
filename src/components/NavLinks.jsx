import React, { useState } from "react";
import { Link } from "react-router-dom";

const routes = [
	{
		name: "Home",
		to: "/#Home",
	},
	{
		name: "Menu",
		to: "/#Menu",
	},
	{
		name: "Contact",
		to: "/#Contact",
	},
];
const Header__element = "Header_Link px-2 py-1 box sm:mx-1";

export default function NavLinks({ headerOrFooter }) {
	const [isOpen, setIsOpen] = useState("start");
	const isOpen_Toggle = () => {
		setIsOpen(isOpen === true ? false : true);
	};

	return (
		<div className="navbar_elements sm:text-md sm:mx-2 sm:mr-8 box ">
			{routes.map((el) => (
				<a className={Header__element + ""} href={el.to}>
					{el.name}
				</a>
			))}
			{headerOrFooter === "Footer" ? (
				<a className={Header__element + ""} href="/Order">
					Order
				</a>
			) : (
				<li className="dropdown ">
					<button
						id="dropdown_btn"
						className={Header__element}
						onClick={isOpen_Toggle}
					>
						Order
					</button>
					<ul
						className={`dropdown-content 
                                ${
									isOpen == false
										? "animate_UP hidden "
										: isOpen == true
										? "animate_DOWN block "
										: "hidden "
								}`}
					>
						<Link className="location-link box" to="/order">
							Dripping Springs
						</Link>
						<Link className="location-link box" to="/order">
							Bee Cave
						</Link>
						<Link className="location-link box" to="/order">
							Marble Falls
						</Link>
					</ul>
				</li>
			)}
		</div>
	);
}
