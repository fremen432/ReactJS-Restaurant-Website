import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function Header() {
  return (
    <div id="SECTION__Header" className=" Header box flex justify-between cbm-green">
        <div className="logo">
            <a href="#Home">
                <img className="" src="assets/Simply-Pho-House.png" alt="restaurant logo" />
            </a>
        </div>
        <div className="cart_icon flex justify-center items-center  mr-4">
            <AiOutlineShoppingCart className=" h-full w-5 mr-1"/>
            <span className="text-xs">1</span>
        </div>

        {/* <ul className="navbar_elements">
            <li><a href="#Home">Home</a></li>
            <li><a href="#Menu">Menu</a></li>
            <OrderDropDown/>
            <li><a href="#Contact">Contact</a></li>
        </ul> */}
    </div>
  )
}
