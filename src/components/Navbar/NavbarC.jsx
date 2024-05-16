import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarC() {

	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container fluid>
				<Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link as={Link} to={"/"}>
							Principal
						</Nav.Link>
						<Nav.Link as={Link} to="/categorias">
							Categorias
						</Nav.Link>
						<NavDropdown title="Link" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">
								Action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action4">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">
								Something else here
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#" disabled>
							Link
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link eventKey={2} href="#memes">
							Login
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavbarC;
