import { useState } from "react";
import { LuListMinus, LuListPlus } from "react-icons/lu";
import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "../components/header";
import Home from "../pages/home";
import Login from "../pages/login";
import { useAppSelector } from "../redux/hooks/useApp";
import GlobalStyle from "../styles/globalStyle";
import themes from "../styles/themes";
import { MenuRoutes } from "./routes";
import { PageContainer } from "./styles";

export const MainRoutes = () => {
	const { token } = useAppSelector((state) => state.user);
	const { status } = useAppSelector((state) => state.theme);
	const theme = themes[status] || "dark";

	if (!token)
		return (
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<AuthRoute />
			</ThemeProvider>
		);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<PageContainer>
				<HomeRoute />
			</PageContainer>
		</ThemeProvider>
	);
};

const AuthRoute = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<Navigate replace to="/login" />} />
		</Routes>
	);
};

const HomeRoute = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Header open={open} setOpen={setOpen} />
			<button>
				{open ? (
					<LuListMinus size={24} onClick={() => setOpen(false)} />
				) : (
					<LuListPlus size={24} onClick={() => setOpen(true)} />
				)}
			</button>
			<Routes>
				<Route
					path="*"
					element={<Navigate replace to="/" state={{ title: "Home" }} />}
				/>
				<Route path="/" element={<Home />} />
				{MenuRoutes.map((main, index) => (
					<Route key={index} path={main.path + "/*"} element={main.element}>
						{main.children?.map((child, childIndex) => (
							<Route
								key={childIndex}
								path={child.path}
								element={child.element}
							/>
						))}
					</Route>
				))}
			</Routes>
		</>
	);
};
