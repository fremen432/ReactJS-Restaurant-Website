import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'

import Cart from '../../../../misc-componenets/Cart';
import Logo from '../../../../misc-componenets/Logo';

export default function Header(props) {

    const [isOpen, setIsOpen] = useState('start');

    const isOpen_Toggle = () => {
        isOpen == false ? setIsOpen(true) : 
        isOpen == true ? setIsOpen(false) :
        setIsOpen(true)
    }

    const { products, cartItems, onAdd, onRemove } = props;   

    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 0;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (

        <div id="SECTION__Header" className="OP_Header Header box flex justify-between ">

            {/* Logo */}
            <Logo classes='OP_Header_Logo' position='header' />

            {/* Right icon */}
            <div className=" OP_Header_RightIcon">
                <button onClick={isOpen_Toggle} className="OP_Header_RightIcon_Button flex justify-center items-center sm:hidden m-5 p-1 pr-0 box rounded">
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
                <Cart
                products={products}
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                isOpen={isOpen}
                headerORbody={'header'}
                />
            </div>
        </div>
    )
}
