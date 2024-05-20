import { Col, Container, Image, Row } from "react-bootstrap";

import baner from "../../assets/baner1.jpg";

import "./Nosotros.css"

const Nosotros = () => {
	return (
		<>
			<Container>
				<Row>
					<Col sm={7}>
						<Image src={baner} fluid />
					</Col>
					<Col sm={4}>
						<div>
							<div className="subtitle-body">
								<p>01</p>
								<p className="fs-4">Quienes Somos</p>
							</div>
							<p className="text-start">
								LIMANS ELECTRIC II inició su actividad con una
								pequeña tienda, hace unos 16 años atrás; debido
								a la demanda de materiales eléctricos por
								construcciones de casas, edificios, residencias,
								tuvo un crecimiento la tienda con materiales
								eléctricos.
							</p>
							<div className="subtitle-body">
								<p>02</p>
								<p className="fs-4">Mision</p>
							</div>
							<p className="text-start">
								Brindar el servicio más completo en la venta de
								materiales eléctricos; industrial y residencial
								según necesidad de cada cliente.
							</p>
							<div className="subtitle-body">
								<p>03</p>
								<p className="fs-4">Vision</p>
							</div>
							<p className="text-start">
								Ser una de las mejores tiendas Eléctricas en
								continua mejora diferenciada para brindar una
								calidad de servicio a sus clientes y adaptada
								sus necesidades.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Nosotros;
