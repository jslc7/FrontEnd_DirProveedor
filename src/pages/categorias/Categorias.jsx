import { Container, Row } from "react-bootstrap";
import BtnAgregar from "./Module/BtnAgregar";
import Tabla from "./Tabla/Tabla";
import { useEffect, useState } from "react";
import { API_CATEGORIAS, SERVER_URL } from "../../urlConf";

function Categorias() {
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

	const updateCategorias = () => {
		getCategorias();
	};

	useEffect(() => {
		getCategorias();
	}, []);
	return (
		<Container>
			<Row>
				<div className="d-flex justify-content-center mt-5">
					<BtnAgregar onAdded={() => updateCategorias()} />
				</div>
			</Row>
			<Row>
				<Tabla categorias={categorias} />
			</Row>
		</Container>
	);
}

export default Categorias;
