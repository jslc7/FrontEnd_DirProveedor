import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./pages/principal/Principal";
import "bootstrap/dist/js/bootstrap.bundle";
import Layout from "./components/Layout/Layout";
import Categorias from "./pages/categorias/Categorias";
import Empresas from "./pages/empresas/Empresas";
import Catalogo from "./pages/catalogos/Catalogo";
import Nosotros from "./pages/nosotros/Nosotros";

function App() {
	return (
		<>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route exact path="/" element={<Principal />} />
						<Route exact path="/categorias" element={<Categorias />} />
						<Route exact path="/empresas" element={<Empresas />} />
						<Route exact path="/catalogos" element={<Catalogo />} />
						<Route exact path="/nosotros" element={<Nosotros />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</>
	);
}

export default App;
