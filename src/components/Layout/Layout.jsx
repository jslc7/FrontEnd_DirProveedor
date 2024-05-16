/* eslint-disable react/prop-types */

import NavbarC from "../Navbar/NavbarC";
import "./Layout.css"

function Layout({...props}) {
	return (
		<div className="containter-fluid layout">
			<NavbarC />
			{props.children}
		</div>
	);
}

export default Layout;
