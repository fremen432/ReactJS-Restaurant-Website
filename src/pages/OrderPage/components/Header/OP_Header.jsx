import { useState } from 'react';

import { AiOutlineShoppingCart } from 'react-icons/ai'

function Header_Cart(props) {
    const { cartItems, onAdd, onRemove, 
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice
 } = props;
    const addRemoveClasses = "box px-2 rounded-md mr-1"
  
    return (
      <div className="OP_HeaderCart box sm:flex flex-col rounded-lg " >
  
        {/* Cart Header */}
        <div id="OP_HeaderCart_Header" className="OP_HeaderCart_Header flex justify-center mb-1 rounded-lg box">
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
        <div id="OP_HeaderCart_CartItems" className="OP_HeaderCart_CartItems box mb-1 rounded-lg ">
          {cartItems.map((item) => (
            <div key={item.id} className="OP_HeaderCart_CartItems_Item box rounded-md p-1 pt-0">
              <div className="col-2">{item.name}</div>
              <div className="grid grid-cols-2 ">
                <div className="">
                    <button onClick={() => onRemove(item)} className={"remove  " + addRemoveClasses}>
                    -
                    </button>
                    <button onClick={() => onAdd(item)} className={"add  " + addRemoveClasses}>
                    +
                    </button>
                </div>
                <div className="text-right">
                    {item.qty} x ${item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Total price */}
        {cartItems.length !== 0 && (
          <div id="OP_HeaderCart_Total" className="OP_HeaderCart_Total  px-2 pb-1 rounded-lg grid">
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
  
            <div className=" OP_HeaderCart_Total_TotalPrice grid grid-cols-2 m-1 px-1 header_1">
              <div className="">
                <strong>Total Price</strong>
              </div>
              <div className=" text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
  
            <div className="horizontal_line"></div>
  
            <div className="flex justify-center items-center">
              <button className="OP_HeaderCart_Total_TotalBtn m-1 p-1 rounded w-full" onClick={
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

export default function Header(props) {

    const [isOpen, setIsOpen] = useState(false);
    const isOpen_Toggle = () => {

        console.log(isOpen)
        isOpen == false ? setIsOpen(true) : setIsOpen(false)
        console.log('isOpen toggle works')
    }

    const { products, cartItems, onAdd, onRemove } = props;   

    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 0;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (

        <div id="SECTION__Header" className=" OP_Header box flex justify-between cbm-green">

            {/* Logo */}
            <div className="OP_Header_Logo">
                <a href="/">
                    <img className="" src="assets/Simply-Pho-House.png" alt="restaurant logo" />
                </a>
            </div>

            {/* Right icon */}
            <div className="
            OP_Header_RightIcon
            ">
                <button onClick={isOpen_Toggle} className="OP_Header_RightIcon_Button sm:hidden flex justify-center items-center m-5 p-1 pr-0 box rounded">
                    <div className=" mx-2 ">
                        <span className="ItemCount_span rounded-full py-1 px-2">{cartItems.length}</span>
                    </div>
                        <div className="RightIcon_TotalPrice mr-2">
                            <strong>${totalPrice.toFixed(2)}</strong>
                        </div>
                    <div className="cart_icon flex justify-center items-center mr-4">
                        <AiOutlineShoppingCart className=" h-full w-5 mr-1" />
                    </div>

                </button>
                <div className={"sm:hidden " + (isOpen == false ? " hidden" : " block")}>
                    <Header_Cart
                    products={products}
                    cartItems={cartItems}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    itemsPrice={itemsPrice}
                    taxPrice={taxPrice}
                    shippingPrice={shippingPrice}
                    totalPrice={totalPrice}
                    />
                </div>
            </div>
        </div>
    )
}
