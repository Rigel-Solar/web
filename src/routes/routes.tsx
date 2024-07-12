import { useRoutes } from "react-router-dom";
import { Home } from "../pages/home";

export const MenuRoutes = () => {
	return useRoutes([
		/* public routes */
		{ path: "/", element: <Home /> },
	]);
};
