import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
	status: "light" | "dark";
};

const initialState: State = {
	status: "dark",
};

const slice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setThemeStatus: (state, action: PayloadAction<"light" | "dark">) => {
			state.status = action.payload;
		},
	},
});

export const { setThemeStatus } = slice.actions;
export default slice.reducer;
