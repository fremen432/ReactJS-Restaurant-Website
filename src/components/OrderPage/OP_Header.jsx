import { Link } from "react-router-dom";

import Logo from "../Logo";
import OP_Header_CartCounter from "../OP_Header_CartCounter";

export default function Header(props) {
	const { products, cartItems, onAdd, onRemove } = props;

	return (
		<div id="SECTION__Header" className="Header ">
			<Link className="Logo " to="/">
				<Logo classes="Logo_Header " position="header" />
			</Link>

			<OP_Header_CartCounter
				products={products}
				cartItems={cartItems}
				onAdd={onAdd}
				onRemove={onRemove}
			/>
		</div>
	);
}
