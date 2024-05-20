import { useEffect, useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_CATEGORIAS, SERVER_URL } from "../../urlConf";

function NavbarC() {
	const [categorias, setCategorias] = useState([]);
	const getCategorias = async () => {
		await fetch(SERVER_URL + API_CATEGORIAS, {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setCategorias(data);
			});
	};

	useEffect(() => {
		getCategorias();
	}, []);
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container fluid>
				<Navbar.Brand href="#">Proveedor</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link as={Link} to={"/"}>
							Inicio
						</Nav.Link>
						<NavDropdown
							title="Materiales Electricos"
							id="basic-nav-dropdown"
						>
							{categorias.map((values) => (
								// eslint-disable-next-line react/jsx-key
								<NavDropdown.Item key={"nav"+values.id} href={"/catalogos?id=" + values.id}>
									{values.nombre}
								</NavDropdown.Item>
							))}
						</NavDropdown>
						<Nav.Link as={Link} to="/categorias">
							Categorias
						</Nav.Link>
						<Nav.Link as={Link} to="/empresas">
							Empresas
						</Nav.Link>
						<Nav.Link as={Link} to="/catalogos?id=0">
							Catalogos
						</Nav.Link>
						<Nav.Link as={Link} to="/nosotros">
							Acerca de nosotros
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
