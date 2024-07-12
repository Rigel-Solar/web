import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { User } from "../../models/user";

type UserState = {
	user: User | null;
	token: string | null;
	error: SerializedError | null;
	loading: boolean;
};

const initialState: UserState = {
	user: null,
	token: null,
	error: null,
	loading: false,
};

const slice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
		},
		addToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
		onLogout: (state) => {
			state.user = null;
			state.token = null;
		},
	},
});

export const { addUser, addToken, onLogout } = slice.actions;
export default slice.reducer;
