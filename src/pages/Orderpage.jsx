import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Menu from "../components/Menu";
import Cart from "../components/Cart";

import { menu } from "../assets/js/Data";

export default function OrderPage() {
	const products = menu;

	const [cartItems, setCartItems] = useState([]);

	const onAdd = (newItem) => {
		const exist = cartItems.find((item) => item.id === newItem.id);
		if (exist) {
			setCartItems(
				cartItems.map((item) =>
					item.id === newItem.id
						? { ...exist, qty: exist.qty + 1 }
						: item
				)
			);
		} else {
			setCartItems([...cartItems, { ...newItem, qty: 1 }]);
		}
	};
	const onRemove = (newItem) => {
		const exist = cartItems.find((item) => item.id === newItem.id);
		if (exist.qty === 1) {
			setCartItems(cartItems.filter((item) => item.id !== newItem.id));
		} else
			setCartItems(
				cartItems.map((item) =>
					item.id === newItem.id
						? { ...exist, qty: exist.qty - 1 }
						: item
				)
			);
	};
	return (
		<>
			<div className="OrderPage faded">
				<Header
					page="OrderPage"
					products={products}
					cartItems={cartItems}
					onAdd={onAdd}
					onRemove={onRemove}
				/>
				<div className="body_footer_wrapper ">
					<div id="SECTION__Body" className="sm:grid sm:grid-cols-3">
						<Menu
							products={products}
							onAdd={onAdd}
							page="OrderPage"
						/>
						<Cart
							products={products}
							cartItems={cartItems}
							onAdd={onAdd}
							onRemove={onRemove}
						/>
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
}
