import { Table } from "react-bootstrap";

function Tabla(props) {
	// eslint-disable-next-line react/prop-types
	let categoriasArray = props?.categorias ?? [];
	return (
		<>
			<Table responsive striped bordered hover className="mt-4">
				<thead>
					<tr>
						<th>ID</th>
						<th>Nombre</th>
						<th>Descripcion</th>
						<th>Slug</th>
					</tr>
				</thead>
				<tbody>
					{categoriasArray.map((value) => (
						<tr key={value.id}>
							<td>{value?.id}</td>
							<td>{value?.nombre}</td>
							<td>{value?.descripcion}</td>
							<td>{value?.slug}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
}

export default Tabla;
