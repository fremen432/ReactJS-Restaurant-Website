import { useState } from 'react';

import Header from '../components/OrderPage/OP_Header';
import Body from '../components/OrderPage/OP_Body';
import Footer from '../components/Footer';

import { menu } from '../Data';

export default function OrderHomepage() {

  const products = menu
    
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

  };
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
      <div className="OrderPage faded">
          <Header 
            products={products}
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          />
          <div className="body_footer_wrapper ">
              <Body 
              products={products}
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              />
              <Footer />
          </div>
      </div>
  )
}
