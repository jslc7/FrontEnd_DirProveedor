import { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { API_CATEGORIAS, API_EMPRESAS, SERVER_URL } from "../../../urlConf";

function BtnAddEmpresa() {
	const [show, setShow] = useState(false);
	const inputNombre = useRef(null);
	const inputEmail = useRef(null);
	const inputTelefono = useRef(null);
	const inputWebsite = useRef(null);
	const inputFacebook = useRef(null);
	const inputTiktok = useRef(null);
	const inputDescripcion = useRef(null);
	const inputYoutube = useRef(null);
	const inputCategoria = useRef(null);
	const inputImagen = useRef(null);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [categorias, setCategorias] = useState([]);

	const makeEmpresa = () => {
		let formData = new FormData();
		formData.append("nombre", inputNombre.current.value);
		formData.append("email", inputEmail.current.value);
		formData.append("telefono", inputTelefono.current.value);
		formData.append("website", inputWebsite.current.value);
		formData.append("facebook", inputFacebook.current.value);
		formData.append("youtube", inputYoutube.current.value);
		formData.append("tiktok", inputTiktok.current.value);
		formData.append("descripcion", inputDescripcion.current.value);
		formData.append("publicado", true);
		formData.append("visitas", 0);
		formData.append("categoriasID", inputCategoria.current.value);
		formData.append("usersID", 1);
		formData.append("image", inputImagen.current.files[0]);
		// Agrega otros campos necesarios
		return formData;
	};

	let postEmpresa = async () => {
		let headersList = {
			Accept: "*/*",
		};
		let bodyContent = makeEmpresa();
		await fetch(SERVER_URL + API_EMPRESAS, {
			method: "POST",
			body: bodyContent,
			headers: headersList,
		})
			.then((res) => {
				if (res.status == 201) {
					alert("Se registro correctamente");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const getCategorias = async () => {
		await fetch(SERVER_URL + API_CATEGORIAS, {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				setCategorias(data);
			})
			.catch((error) => {
				alert(error);
			});
	};

	useEffect(() => {
		getCategorias();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Button
				variant="primary"
				onClick={() => {
					handleShow();
				}}
			>
				Agregar Empresa
			</Button>

			<Modal
				show={show}
				backdrop="static"
				onHide={handleClose}
				scrollable={true}
			>
				<Modal.Header closeButton>
					<Modal.Title>Agregar Empresa</Modal.Title>
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

							<Form.Group as={Col} controlId="inputEmain">
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="email"
									placeholder="Email"
									ref={inputEmail}
								/>
							</Form.Group>
						</Row>

						<Row className="mb-3">
							<Form.Group as={Col} controlId="form2">
								<Form.Label>Precio</Form.Label>
								<Form.Control
									ref={inputTelefono}
									type="text"
									placeholder="Ingrese Precio"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="form3">
								<Form.Label>Website</Form.Label>
								<Form.Control
									type="text"
									placeholder="Ingrese Website"
									ref={inputWebsite}
								/>
							</Form.Group>
						</Row>

						<Row className="mb-3">
							<Form.Group as={Col} controlId="form4">
								<Form.Label>Facebook</Form.Label>
								<Form.Control
									ref={inputFacebook}
									type="text"
									placeholder="Ingrese Facebook"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="form5">
								<Form.Label>Tiktok</Form.Label>
								<Form.Control
									type="text"
									placeholder="Ingrese tiktok"
									ref={inputTiktok}
								/>
							</Form.Group>
						</Row>

						<Row className="mb-3">
							<Form.Group as={Col} controlId="form6">
								<Form.Label>Descripcion</Form.Label>
								<Form.Control
									ref={inputDescripcion}
									type="text"
									placeholder="Ingrese Descripcion"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="form7">
								<Form.Label>Youtube</Form.Label>
								<Form.Control
									type="text"
									placeholder="Ingrese Youtube"
									ref={inputYoutube}
								/>
							</Form.Group>
						</Row>
						<Row className="mb-3">
							<Form.Select
								ref={inputCategoria}
								aria-label="Default select example"
							>
								<option>Seleccione Categoria</option>
								{categorias.map((value) => (
									<option key={value.id} value={value.id}>
										{value.nombre}
									</option>
								))}
							</Form.Select>
						</Row>
						<Row className="mb-3">
							<Form.Group controlId="formFile" className="mb-3">
								<Form.Label>Agregar imagen</Form.Label>
								<Form.Control type="file" ref={inputImagen} />
							</Form.Group>
						</Row>

						<Button variant="primary" onClick={postEmpresa}>
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

export default BtnAddEmpresa;
