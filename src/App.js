import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/animations/animations.css";
import "./assets/css/app_styles/App.css";

import HomePage from "./pages/HomePage.jsx";
import OrderPage from "./pages/OrderPage.jsx";

function App() {
	return (
		<div className="App ">
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/order" element={<OrderPage />} />
			</Routes>
		</div>
	);
}

export default App;
