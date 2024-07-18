import React, { useState } from "react";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";
import { useAppDispatch } from "../../redux/hooks/useApp";
import { setThemeStatus } from "../../redux/reducers/theme-reducer";
import * as C from "./styles";

type ThemeType = "light" | "dark";

interface ThemeButtonProps {
	theme: ThemeType;
	isActive: boolean;
	onClick: () => void;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
	theme,
	isActive,
	onClick,
}) => {
	const getIcon = () =>
		theme === "light" ? <AiOutlineSun /> : <AiOutlineMoon />;
	const getLabel = () => (theme === "light" ? "Light" : "Dark");

	return (
		<button className={isActive ? "active" : ""} onClick={onClick}>
			{getIcon()}
			<p>{getLabel()}</p>
		</button>
	);
};

const SwitchTheme: React.FC = () => {
	const dispatch = useAppDispatch();
	const [activeTheme, setActiveTheme] = useState<ThemeType>("dark");

	const toggleTheme = () => {
		const newTheme = activeTheme === "light" ? "dark" : "light";
		setActiveTheme(newTheme);
		dispatch(setThemeStatus(newTheme));
		console.log(newTheme);
	};

	return (
		<C.Theme>
			<ThemeButton
				theme="light"
				isActive={activeTheme === "light"}
				onClick={toggleTheme}
			/>
			<ThemeButton
				theme="dark"
				isActive={activeTheme === "dark"}
				onClick={toggleTheme}
			/>
		</C.Theme>
	);
};

export default SwitchTheme;
