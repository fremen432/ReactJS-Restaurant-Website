import { useState } from 'react';

import Menu from './Menu'
import Cart from './Cart'

import data from '../../../../Data';

export default function Body() {

  const products = data.menu

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    // console.log(cartItems)
    // clCartItems()

  };

  const clCartItems = () => console.log(cartItems)

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div id="SECTION__Body" className="Body grid grid-cols-3 ">
        <Menu 
        className=""
        products={products} 
        onAdd={onAdd}
        />
        <Cart 
        className="" 
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        />
    </div>
  )
}