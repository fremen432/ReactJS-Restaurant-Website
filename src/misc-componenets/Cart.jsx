import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function Cart(props) {
    const { cartItems, onAdd, onRemove, isOpen, headerORbody } = props;
    
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 0;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <div className={`flex-col rounded-lg box 
        ` + (
            headerORbody != 'header' ? 'BodyCart hidden sm:flex m-4 ml-0 rounded-lg ' :

            isOpen == false ? "HeaderCart sm:hidden animate_UP hidden" : 
            isOpen == true ? "HeaderCart sm:hidden animate_DOWN block" :
            'HeaderCart hidden' 
        )} >
            {/* Cart Header */}
            <div id="Cart_Header" className="Cart_Header flex justify-center rounded-lg ">
            {cartItems.length === 0 ?
                <div className="cartEmpty rounded-lg px-1" >Cart is empty</div> :

                <div className="cartNotEmpty rounded-lg">
                    <h1 className="text-center">Cart</h1>
                    <div className="flex justify-center items-center mr-4">
                        <AiOutlineShoppingCart className="h-full w-5 mr-1 " />
                        <span className="text-s ">{cartItems.length}</span>
                    </div>
                </div>}
            </div>
    
            {/* Cart Items */}
            {cartItems.length >= 1 && (

                <div className="Cart_Items box my-1 rounded-lg">
                {cartItems.map( item => (
                    <div key={item.id} className="Cart_Items_Item box rounded-md p-1.5 pt-1">
                        <div className="col-2">{item.name}</div>
                        <div className="grid grid-cols-2 ">
                            <div className="">
                                <button onClick={() => onRemove(item)} className="minusBtn ">
                                -
                                </button>
                                <button onClick={() => onAdd(item)} className="plusBtn ">
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
            )}

            {/* Total price */}
            {cartItems.length >= 1 && (
            <div id="Cart_Total" className="Cart_Total px-2 pb-1 grid rounded-lg">
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
    
                <div className="TotalPrice grid grid-cols-2 m-1 px-1 header_1">
                <div className="">
                    <strong>Total Price</strong>
                </div>
                <div className=" text-right">
                    <strong>${totalPrice.toFixed(2)}</strong>
                </div>
                </div>
    
                <div className="horizontal_line"></div>
    
                <div className="flex justify-center items-center">
                <button className="Style_darkBtn m-1 " onClick={
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
