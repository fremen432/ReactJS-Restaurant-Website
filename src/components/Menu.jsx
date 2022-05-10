import React, { useState } from "react";
import { sortedMenu } from "../assets/js/Data";
import Dish from "./Dish";
import DishCategory from "./DishCategory";

export default function Menu(props) {
	const { onAdd, page } = props;

	return (
		<div
			id="Menu"
			className="Menu_Component box rounded-lg shadow-lg col-span-2 m-4"
		>
			{/* Menu Categories */}
			<div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
				{/* Returns h1 with all category and respective menu items inside */}
				{sortedMenu.map((arr) => (
					<DishCategory
						categoryTitle={arr[0].category}
						dishes={arr}
						onAdd={onAdd}
						page={page}
					/>
				))}
			</div>
		</div>
	);
}
