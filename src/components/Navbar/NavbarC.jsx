import { Container, Navbar } from "react-bootstrap";

function NavbarC() {
	return (
		<Container>
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="#">Navbar</Navbar.Brand>
				</Container>
			</Navbar>
		</Container>
	);
}

export default NavbarC;
