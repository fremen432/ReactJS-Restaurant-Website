import Home from "./Hero";
import Menu from "./Menu";
import Contact from "./Contact";

export default function Body() {
	return (
		<div id="SECTION__Body" className="Body snap-type-y">
			<Home />
			<Menu page="HomePage" />
			<Contact />
		</div>
	);
}
