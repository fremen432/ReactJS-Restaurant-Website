import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <div id="OP_Body_Cart" className="hidden sm:flex box OP_Body_Cart section flex-col m-4 ml-0 rounded-xl" >

      {/* Cart Header */}
      <div id="OP_Body_Cart_Header" className="OP_Body_Cart_Header flex justify-center rounded-t-xl ">
        {cartItems.length === 0 ?
          <div>Cart is empty</div> :
          <>
            <h1 className="text-center">Cart</h1>
            <div className="cart_icon flex justify-center items-center mr-4">
              <AiOutlineShoppingCart className=" h-full w-5 mr-1" />
              <span className="text-xs">{cartItems.length}</span>
            </div>
          </>}
      </div>

      {/* Cart Items */}
      <div id="OP_Body_Cart_Items" className="OP_Body_Cart_Items box">
        {cartItems.map((item) => (
          <div key={item.id} className="Cart_Item box">
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
        <div id="OP_Body_Cart_Total" className="OP_Body_Cart_Total m-2 px-2 pb-1 rounded-xl grid">
          <hr></hr>
          <div className="grid grid-cols-2 m-1">
            <div className="">Items Price</div>
            <div className=" text-right">${itemsPrice.toFixed(2)}</div>
          </div>

          <div className="grid grid-cols-2 m-1 mt-0">
            <div className="">Tax Price</div>
            <div className=" text-right">${taxPrice.toFixed(2)}</div>
          </div>

          <div className="grid grid-cols-2 m-1 mt-0">
            <div className="">Shipping Price</div>
            <div className=" text-right">
              ${shippingPrice.toFixed(2)}
            </div>
          </div>

          <div className=" Total_Price grid grid-cols-2 m-1 px-1 header_1">
            <div className="">
              <strong>Total Price</strong>
            </div>
            <div className=" text-right">
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>

          <hr />

          <div className="flex justify-center items-center">
            <button className="Total_Btn m-1 p-1 rounded w-full box2" onClick={
              () => {
                let customersOrder = cartItems.map(el => ({ dish: el.name, qty: el.qty }))
                alert(JSON.stringify(customersOrder))
              }
            }>
              Checkout
            </button>
          </div>
        </div>
      )}

    </div>
  )
}
