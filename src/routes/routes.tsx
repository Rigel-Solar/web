import { useRoutes } from "react-router-dom";
import Banho from "../pages/banho";
import Fotovoltaico from "../pages/fotovoltaico";
import Home from "../pages/home";
import Piscina from "../pages/piscina";
import Tecnicos from "../pages/tecnicos";

export const MenuRoutes = () => {
	return useRoutes([
		/* public routes */
		{ path: "/", element: <Home /> },
		{ path: "/fotovoltaico", element: <Fotovoltaico /> },
		{ path: "/banho", element: <Banho /> },
		{ path: "/piscina", element: <Piscina /> },
		{ path: "/tecnicos", element: <Tecnicos /> },
	]);
};
