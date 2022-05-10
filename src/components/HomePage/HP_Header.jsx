import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo";
import NavLinks from "../NavLinks";

export default function Header({ windowWidth }) {
	return (
		<div className="Header flex justify-between text-sm ">
			<Link className="Logo " to="/">
				<Logo
					classes="Logo_Header "
					position="header"
					windowWidth={windowWidth}
				/>
			</Link>
			<NavLinks headerOrFooter="Header" />
		</div>
	);
}
