import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { ThemeProvider } from "styled-components";
import store from "./redux/store";
import { MainRoutes } from "./routes/MainRoutes";
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
						<Toaster
							richColors
							position="top-right"
							duration={3000}
							toastOptions={{
								style: {
									height: 50,
									padding: 20,
									whiteSpace: "pre-line",
								},
							}}
						/>
						<MainRoutes />
					</BrowserRouter>
				</QueryClientProvider>
			</Provider>
		</ThemeProvider>
	);
}
