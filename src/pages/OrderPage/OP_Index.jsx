import { useState } from 'react';

// Components imports
import Header from './components/Header/OP_Header';
// import Footer from './components/Footer/OP_Footer';
import Body from './components/Body/OP_Body';
import Footer from '../../misc-componenets/Footer';

import { menu } from '../../Data';

const OrderHomepage = () => {

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
          {/* <div className="OP_Header"> */}
            <Header 
              products={products}
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          {/* </div> */}
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

export default OrderHomepage;