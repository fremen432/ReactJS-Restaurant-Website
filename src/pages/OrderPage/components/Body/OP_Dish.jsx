import React from 'react';

export default function Dish(props) {
  const { dish, onAdd, arr, hidden } = props;
  const dish_name_classes = 'grid grid-cols-4'
  return (
    <>
        <div className={"menu_item m-2 box p-2 pt-1 rounded-lg " + hidden}>
          <div className={dish_name_classes + " dish_name"} >
              <h3 className="text-lg col-start-1 col-span-3 ">{dish.name}</h3>
              <span id="price" className="text-sm col-start-4 col-span-1 text-center">{
              (dish.price !== '' ? '$' + dish.price : '')
              }</span>
          </div>
          <p className="text-sm">{dish.description}</p>
          <button onClick={() => onAdd(dish)} className="order_btn rounded-md px-2 py-1 mt-1 text-sm">Add to order</button>
        </div>
    </>
  );
}
