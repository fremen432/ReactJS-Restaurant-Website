// import Header from "../components/HomePage/HP_Header";
import Header from "../components/Header";
import Body from "../components/HomePage/HP_Body";
import Footer from "../components/Footer";

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
				<Body />
				<Footer />
			</div>
		</div>
	);
}
