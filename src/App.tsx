import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import Loading from "./components/loading";
import { persistor, store } from "./redux/store";
import { MainRoutes } from "./routes/MainRoutes";

export default function App() {
	const queryClient = new QueryClient();

	return (
		<Provider store={store}>
			<PersistGate loading={<Loading />} persistor={persistor}>
				<QueryClientProvider client={queryClient}>
					<BrowserRouter>
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
						<SpeedInsights />
						<Analytics />
					</BrowserRouter>
				</QueryClientProvider>
			</PersistGate>
		</Provider>
	);
}
