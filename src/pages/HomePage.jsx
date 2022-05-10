import Header from "../components/Header";
import Footer from "../components/Footer";

import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Contact from "../components/Contact";

export default function HomePage(props) {
	const { setIsOpen, isOpen, windowWidth } = props;

	return (
		<div className="HomePage app">
			<Header
				page="HomePage"
				setIsOpen={setIsOpen}
				isOpen={isOpen}
				windowWidth={windowWidth}
			/>
			<div className="body_footer_wrapper ">
				<Hero />
				<Menu page="HomePage" />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}
