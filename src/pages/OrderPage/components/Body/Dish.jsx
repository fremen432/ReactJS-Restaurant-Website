import React from 'react';

export default function Dish(props) {
  const { dish, onAdd, arr } = props;
  const dish_name_classes = 'grid grid-cols-4'
  return (
    <>
        <div className="menu_item my-4">
          <div className={dish_name_classes + " dish_name"} >
              <h3 className="text-lg col-start-1 col-span-3 ">{dish.name}</h3>
              <span id="price" className="text-sm col-start-4 col-span-1 text-center">{
              (dish.price !== '' ? '$' + dish.price : '') +
              (dish.price_small  ? 'Small: $' + dish.price_small + ' ' : '') +
              (dish.price_large  ? 'Large: $' + dish.price_large : '')
              }</span>
          </div>
          <p className="text-sm">{dish.description}</p>
          <button onClick={() => onAdd(dish)} className="order_btn rounded-lg mx-1 p-1 text-sm">Add to order</button>
        </div>
    </>
  );
}
