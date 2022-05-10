import NavLinks from "./NavLinks";

export default function Footer() {
	return (
		<div className="Footer text-sm sm:text-md ">
			<NavLinks headerOrFooter="Footer" />
		</div>
	);
}
// <div className="Footer text-sm sm:text-md grid grid-cols-4">
// 	<a href="/#Home" className="footer-element">
// 		Home
// 	</a>
// 	<a href="/#Menu" className="footer-element">
// 		Menu
// 	</a>
// 	<a href="/#Contact" className="footer-element">
// 		Contact
// 	</a>
// 	<a href="/order" className="footer-element">
// 		Order
// 	</a>
// </div>
