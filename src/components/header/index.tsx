import React, { ReactNode, useMemo } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import { Icons } from "../../assets/Icons";
import rigel from "../../assets/icon.png";
import * as C from "./styles";
import SwitchTheme from "./switchTheme";

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
      { label: "Fotovoltáico", icon: <Icons.fotovoltaico />, route: "/fotovoltaico" },
      { label: "Banho", icon: <Icons.banho />, route: "/banho" },
      { label: "Piscina", icon: <Icons.piscina />, route: "/piscina" },
      { label: "Técnicos", icon: <Icons.tecnicos />, route: "/tecnicos" },
    ],
  },
];

const Menu: React.FC<{ sections: MenuSection[] }> = ({ sections }) => {
  const location = useLocation();

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
                <NavLink to={item.route}>
                  {item.icon}
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

const Header: React.FC = () => {
  const menuItems: MenuSection[] = useMemo(getMenuItems, []);

  return (
    <C.Header>
      <div className="top">
        <div className="rigel">
          <img src={rigel} alt="Logo" />
          <h1>Rigel Solar</h1>
        </div>
        <Menu sections={menuItems} />
      </div>
      <div className="bottom">
        <C.Logout>
          <AiOutlineLogout/>
          Sair
        </C.Logout>
        <SwitchTheme/>
      </div>
    </C.Header>
  );
};

export default Header;