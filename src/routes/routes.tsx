import Banho from "../pages/banho";
import Cliente from "../pages/cliente";
import Fotovoltaico from "../pages/fotovoltaico";
import Piscina from "../pages/piscina";
import Tecnicos from "../pages/tecnicos";

interface RouteType {
	path: string;
	element: JSX.Element;
	children?: RouteType[];
}

export const MenuRoutes: RouteType[] = [
	{ path: "/fotovoltaico", element: <Fotovoltaico /> },
	{ path: "/banho", element: <Banho /> },
	{ path: "/piscina", element: <Piscina /> },
	{ path: "/tecnicos", element: <Tecnicos /> },
	{ path: "/cliente", element: <Cliente /> },
];
