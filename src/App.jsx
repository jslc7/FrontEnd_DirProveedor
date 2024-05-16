import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./pages/principal/Principal";
import "bootstrap/dist/js/bootstrap.bundle";
import Layout from "./components/Layout/Layout";
import Categorias from "./pages/categorias/Categorias";

function App() {
	return (
		<>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route exact path="/" element={<Principal />} />
						<Route exact path="/categorias" element={<Categorias />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</>
	);
}

export default App;
