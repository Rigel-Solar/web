import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/header";
import store from "./redux/store";
import { MenuRoutes } from "./routes/routes";
import { PageContainer } from "./routes/styles";
import GlobalStyle from "./styles/globalStyle";
import { theme } from "./styles/themes";
export default function App() {
	const queryClient = new QueryClient();

	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<BrowserRouter>
						<GlobalStyle />
						<PageContainer>
							<Header />
							<MenuRoutes />
						</PageContainer>
					</BrowserRouter>
				</QueryClientProvider>
			</Provider>
		</ThemeProvider>
	);
}
