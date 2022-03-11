import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function Header(props) {
    const { cartItems } = props;

    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 0;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <div id="SECTION__Header" className=" OrderPage_Header Header box flex justify-between cbm-green">
            <div className="logo">
                <a href="#Home">
                    <img className="" src="assets/Simply-Pho-House.png" alt="restaurant logo" />
                </a>
            </div>
            <a href='#' className=" sm:hidden OrderPage_Header_RightIcon flex justify-center items-center  m-5 box rounded">
                <div className="RightIcon_ItemCount mx-2 ">
                    <span className="box ItemCount_span rounded-full px-1">{cartItems.length}</span>

                </div>
                <div className="RightIcon_TotalPrice mr-2" >
                    <div className="">
                        <strong>${totalPrice.toFixed(2)}</strong>
                    </div>

                </div>
                <div className="cart_icon flex justify-center items-center mr-4">
                    <AiOutlineShoppingCart className=" h-full w-5 mr-1" />
                </div>

            </a>
        </div>
    )
}
