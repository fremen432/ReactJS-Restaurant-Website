import data from '../../../../Data'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function Cart(props) {
    const { cartItems, onAdd, onRemove } = props;

    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
    <div id="Cart" className="box Cart section mx-2">

        {/* Header */}
      <div id="cart_header" className="items_header flex justify-center header_1">
        {cartItems.length === 0 ? 
        <div>Cart is empty</div> : 
        <>
            <h1 className="text-center">Cart</h1>
            <div className="cart_icon flex justify-center items-center mr-4">
                <AiOutlineShoppingCart className=" h-full w-5 mr-1"/>
                <span className="text-xs">{cartItems.length}</span>
            </div>
        </>}
      </div>

      {/* Cart Items */}
      <div id="cart_items_container" className="cart_items_container">
        {cartItems.map((item) => (
            <div key={item.id} className="cart_item box">
                <div className="col-2">{item.name}</div>
                <div className="col-2">
                <button onClick={() => onRemove(item)} className="remove">
                    -
                </button>{' '}
                <button onClick={() => onAdd(item)} className="add">
                    +
                </button>
                </div>
                <div className="col-2 text-right box">
                    
                {item.qty} x ${item.price}
                </div>
            </div>
        ))}
      </div>

        {/* Total price */}
      {cartItems.length !== 0 && (
          <div id="cart_total" className="w-full ">
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>

            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>

            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row header_1">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>

            <hr />

            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </div>
        )}

    </div>
  )
}
