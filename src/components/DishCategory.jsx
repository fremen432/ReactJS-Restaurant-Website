import React, { useState } from "react";
import Dish from "./Dish";

export default function DishCategory(props) {
	const { categoryTitle, dishes, onAdd, page } = props;

	const [isHidden, setIsHidden] = useState("start");
	const toggleHidden = () => {
		setIsHidden(isHidden == true ? false : true);
	};

	return (
		<div className="Dish_category box m-2 shadow-lg rounded-lg ">
			<h2
				className={`Menu_Title text-center rounded-lg
					${page == "HomePage" ? "" : "cursor-pointer "}`}
				onClick={page == "HomePage" ? "" : toggleHidden}
			>
				{categoryTitle}
			</h2>

			<div
				className={`OP_Menu_Dishes box 
					${
						page == "HomePage"
							? "block"
							: isHidden == true
							? "roll_DOWN_animation "
							: isHidden == false
							? "roll_UP_animation "
							: "hidden"
					}`}
			>
				{dishes.map((dish) => (
					<Dish key={dish.id} dish={dish} onAdd={onAdd} page={page} />
				))}
			</div>
		</div>
	);
}
