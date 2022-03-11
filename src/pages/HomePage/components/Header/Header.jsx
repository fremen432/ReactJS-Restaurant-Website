const DropDown = () =>
    <li className="dropdown">
        <span>Order</span>
        <ul className="dropdown-content">
            <li className="dropdown-location"><a href="/order">Dripping Springs</a></li>
            <li className="dropdown-location"><a href="/order">Bee Cave</a></li>
            <li className="dropdown-location"><a href="/order">Marble Falls</a></li>
        </ul>
    </li>

export default function Header() {
    return (
        <div id="SECTION__Header" className="Header box">
            <div className="logo">
                <a href="/">
                    <img className="" src="assets/Simply-Pho-House.png" alt="restaurant logo" />
                </a>
            </div>
            <ul className="navbar_elements">
                <li><a href="#Home">Home</a></li>
                <li><a href="#Menu">Menu</a></li>
                <DropDown />
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    )
}
