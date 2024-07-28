import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import themes from "../src/styles/themes";

interface ProviderProps {
	children?: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
	const theme = themes["dark"];
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
