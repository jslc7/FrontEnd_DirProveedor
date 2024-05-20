import { Container } from "react-bootstrap";
import { API_EMPRESAS, SERVER_URL } from "../../urlConf";
import { useEffect, useState } from "react";
import CardEmpresas from "./Modules/CardEmpresas";
import "./Catalogo.css";
//import { useSearchParams } from "react-router-dom";

const Catalogo = () => {
	const [empresas, setEmpresas] = useState([]);
	//const [searchParams] = useSearchParams();

	//const id_categoria = searchParams.get("id");
	const getEmpresas = async () => {
		await fetch(SERVER_URL + API_EMPRESAS )
			.then((res) => res.json())
			.then((data) => {
				setEmpresas(data ?? []);
			});
	};

	useEffect(() => {
		getEmpresas();
	}, []);
	return (
		<>
			<Container fluid>
				<div className="flex-wrap">
					{empresas.map((value) => (
						<div className="margin-body" key={value.id}>
							<CardEmpresas
								id={value.id}
								nombre={value.nombre}
								descripcion={value.descripcion}
								email={value.email}
								telefono={value.telefono}
								facebook={value.facebook}
								urlfoto={value.urlfoto}
							/>
						</div>
					))}
				</div>
			</Container>
		</>
	);
};

export default Catalogo;
