import { Table } from "react-bootstrap";

function TablaEmpresa(props) {
	// eslint-disable-next-line react/prop-types
	let empresasArray = props?.empresas ?? [];
	return (
		<Table responsive striped bordered hover className="mt-4">
			<thead>
				<tr>
					<th>ID</th>
					<th>Nombre</th>
					<th>Descripcion</th>
					<th>email</th>
					<th>facebook</th>
					<th>telefono</th>
					<th>tiktok</th>
					<th>visitas</th>
					<th>website</th>
					<th>youtube</th>
					<th>creacion</th>
				</tr>
			</thead>
			<tbody>
				{empresasArray.map((value) => (
					<tr key={value.id}>
						<td>{value?.id}</td>
						<td>{value?.nombre}</td>
						<td>{value?.descripcion}</td>
						<td>{value?.email}</td>
						<td>{value?.facebook}</td>
						<td>{value?.telefono}</td>
						<td>{value?.tiktok}</td>
						<td>{value?.visitas}</td>
						<td>{value?.website}</td>
						<td>{value?.youtube}</td>
						<td>{value?.created_at}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}

export default TablaEmpresa;
