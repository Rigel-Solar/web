import React, { ReactNode, useMemo } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import { Icons } from "../../assets/Icons";
import rigel from "../../assets/icon.png";
import { useAppDispatch } from "../../redux/hooks/useApp";
import { onLogout } from "../../redux/reducers/user-reducer";
import * as C from "./styles";
import SwitchTheme from "./switchTheme";

export interface HeaderProps {
	open: boolean;
	setOpen: (value: boolean) => void;
}

interface MenuItem {
	label: string;
	icon: ReactNode;
	route: string;
}

interface MenuSection {
	title?: string;
	items: MenuItem[];
}

const getMenuItems = (): MenuSection[] => [
	{
		title: "",
		items: [
			{ label: "Home", icon: <Icons.home />, route: "/" },
			{
				label: "Fotovoltáico",
				icon: <Icons.fotovoltaico />,
				route: "/fotovoltaico",
			},
			{ label: "Banho", icon: <Icons.banho />, route: "/banho" },
			{ label: "Piscina", icon: <Icons.piscina />, route: "/piscina" },
			{ label: "Técnicos", icon: <Icons.tecnicos />, route: "/tecnicos" },
			{
				label: "Cliente",
				icon: <Icons.clientes fill="white" width={16} />,
				route: "/cliente",
			},
		],
	},
];

const Menu: React.FC<{
	sections: MenuSection[];
	setOpen: (value: boolean) => void;
}> = ({ sections, setOpen }) => {
	const location = useLocation();

	const handleNavLinkClick = () => {
		setOpen(false);
	};

	return (
		<nav>
			{sections.map((section, sectionIndex) => (
				<div key={sectionIndex}>
					{section.title && <h2>{section.title}</h2>}
					<ul className="nav-list">
						{section.items.map((item, itemIndex) => (
							<li
								key={itemIndex}
								className={location.pathname === item.route ? "active" : ""}
							>
								<NavLink to={item.route} onClick={handleNavLinkClick}>
									{item.icon}
									<p>{item.label}</p>
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			))}
		</nav>
	);
};

const Header = ({ open = true, setOpen }: HeaderProps) => {
	const menuItems: MenuSection[] = useMemo(getMenuItems, []);
	const dispatch = useAppDispatch();

	return (
		<C.Header $open={open}>
			<div className="top">
				<div className="rigel">
					<img src={rigel} alt="Logo" />
					<h1>Rigel Solar</h1>
				</div>
				<Menu sections={menuItems} setOpen={setOpen} />
			</div>
			<div className="bottom">
				<C.Logout onClick={() => dispatch(onLogout())}>
					<AiOutlineLogout />
					Sair
				</C.Logout>
				<SwitchTheme />
			</div>
		</C.Header>
	);
};

export default Header;
