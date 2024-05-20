import { useRef, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { API_CATEGORIAS, SERVER_URL } from "../../../urlConf";

function BtnAgregar(props) {
	const [show, setShow] = useState(false);
	const inputNombre = useRef(null);
	const inputSlug = useRef(null);
	const inputDescripcion = useRef(null);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const crearCategoria = () => {
		let categoria = {
			nombre: inputNombre.current.value,
			slug: inputSlug.current.value,
			descripcion: inputDescripcion.current.value,
		};
		return categoria;
	};

	const saveData = async () => {
		console.log(crearCategoria());
		await fetch(SERVER_URL + API_CATEGORIAS, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "*/*",
			},
			body: JSON.stringify(crearCategoria()),
		}).then((res) => {
			if (res.status == 201) {
				alert("Se registro correctamente");
				clearForm();
				handleClose();
				// eslint-disable-next-line react/prop-types
				props.onAdded();
			}
		});
	};

	const clearForm = () => {
		inputNombre.current.value = "";
		inputSlug.current.value = "";
		inputDescripcion.current.value = "";
	};

	return (
		<>
			<Button
				variant="primary"
				onClick={() => {
					handleShow();
				}}
			>
				Agregar Categoria
			</Button>

			<Modal show={show} backdrop="static" onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Agregar Categoria</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Row className="mb-3">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Nombre</Form.Label>
								<Form.Control
									ref={inputNombre}
									type="text"
									placeholder="Ingrese nombre"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Slug</Form.Label>
								<Form.Control
									type="text"
									placeholder="Slug"
									ref={inputSlug}
								/>
							</Form.Group>
						</Row>

						<Form.Group
							className="mb-3"
							controlId="formGridAddress1"
						>
							<Form.Label>Descripcion</Form.Label>
							<Form.Control
								ref={inputDescripcion}
								placeholder="Ingrese Descripcion"
								autoComplete="off"
							/>
						</Form.Group>

						<Button variant="primary" onClick={saveData}>
							Guardar
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cerrar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default BtnAgregar;
