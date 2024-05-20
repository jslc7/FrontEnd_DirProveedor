/* eslint-disable react/prop-types */
import { Card, ListGroup } from "react-bootstrap";
import { SERVER_URL } from "../../../urlConf";

const CardEmpresas = (props) => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={SERVER_URL+"/"+props.urlfoto} />
			<Card.Body>
				<Card.Title>{props.nombre}</Card.Title>
				<Card.Text>
					{props.descripcion}
				</Card.Text>
			</Card.Body>
			<ListGroup className="list-group-flush">
				<ListGroup.Item>{props.email}</ListGroup.Item>
				<ListGroup.Item>{"Precio: "+props.telefono+" Bs"}</ListGroup.Item>
				<ListGroup.Item>{props.facebook}</ListGroup.Item>
			</ListGroup>
		</Card>
	);
};

export default CardEmpresas;
