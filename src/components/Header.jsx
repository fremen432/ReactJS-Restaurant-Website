import React from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import OP_Header_CartCounter from "./OP_Header_CartCounter";

export default function Header(props) {
	const { page, products, cartItems, onAdd, onRemove, windowWidth } = props;

	return (
		<div className="Header flex items-center justify-between text-sm ">
			<Link className="Logo  " to="/">
				<Logo
					classes="Logo_Header w-32 sm:w-full"
					position="header"
					windowWidth={windowWidth}
				/>
			</Link>
			{page === "HomePage" ? (
				<NavLinks headerOrFooter="Header" />
			) : (
				<OP_Header_CartCounter
					products={products}
					cartItems={cartItems}
					onAdd={onAdd}
					onRemove={onRemove}
				/>
			)}
		</div>
	);
}
