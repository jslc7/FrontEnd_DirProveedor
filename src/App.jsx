import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Principal from "./pages/principal/Principal";
import NavbarC from "./components/Navbar/NavbarC";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Principal />,
		},
	]);

	return (
		<>
			<NavbarC />
			<RouterProvider router={router} />
		</>
	);
}

export default App;
