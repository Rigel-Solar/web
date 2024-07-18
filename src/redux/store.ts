import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "./reducers/theme-reducer";
import userReducer from "./reducers/user-reducer";

const rootReducer = combineReducers({
	user: userReducer,
	theme: themeReducer,
});

const persistConfig = {
	key: "root",
	storage: storage,
	whitelist: ["user", "theme"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
