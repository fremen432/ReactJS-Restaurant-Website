import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

import Cart from "../Cart";
import Logo from "../Logo";
import OP_Header_CartCounter from "../OP_Header_CartCounter";

export default function Header(props) {
	const { products, cartItems, onAdd, onRemove } = props;

	const [isOpen, setIsOpen] = useState("start");

	const isOpen_Toggle = () => {
		isOpen == false
			? setIsOpen(true)
			: isOpen == true
			? setIsOpen(false)
			: setIsOpen(true);
	};

	return (
		<div id="SECTION__Header" className="Header ">
			{/* Logo */}

			<Link className="Logo " to="/">
				<Logo classes="Logo_Header " position="header" />
			</Link>

			{/* Right icon */}
			<OP_Header_CartCounter
				products={products}
				cartItems={cartItems}
				onAdd={onAdd}
				onRemove={onRemove}
			/>
		</div>
	);
}
