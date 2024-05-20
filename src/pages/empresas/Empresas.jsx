import { Container, Row } from "react-bootstrap";
import BtnAddEmpresa from "./Module/BtnAddEmpresa";
import TablaEmpresa from "./Module/TablaEmpresa";
import { API_EMPRESAS, SERVER_URL } from "../../urlConf";
import { useEffect, useState } from "react";

const Empresas = () => {
	const [empresas, setEmpresas] = useState([]);
	const getEmpresas = async () => {
		await fetch(SERVER_URL + API_EMPRESAS)
			.then((res) => res.json())
			.then((data) => {
				setEmpresas(data);
			});
	};

	useEffect(() => {
		getEmpresas();
	}, []);
	return (
		<Container>
			<Row>
				<div className="d-flex justify-content-center mt-5">
					<BtnAddEmpresa />
				</div>
			</Row>
			<Row>
				<TablaEmpresa empresas={empresas} />
			</Row>
		</Container>
	);
};

export default Empresas;
