import Banho from "../pages/banho";
import BI from "../pages/bi";
import Cliente from "../pages/cliente";
import Fotovoltaico from "../pages/fotovoltaico";
import Pedido from "../pages/pedido/pedido";
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
	{ path: "/clientes", element: <Cliente /> },
	{ path: "/pedidos", element: <Pedido /> },
	{ path: "/bi", element: <BI /> },
];
