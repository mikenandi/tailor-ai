import {PayloadAction, createSlice} from "@reduxjs/toolkit";

interface MsgState {
	error: string;
	info: string;
}

const initialState: MsgState = {
	error: "",
	info: "",
};

const errorMsgSlice = createSlice({
	name: "ERROR_MSG",
	initialState,
	reducers: {
		errorMsg: (state, actions: PayloadAction<string>) => {
			state.error = actions.payload;
		},
		infoMsg: (state, actions: PayloadAction<string>) => {
			state.info = actions.payload;
		},
	},
});

export const {errorMsg, infoMsg} = errorMsgSlice.actions;

export default errorMsgSlice.reducer;
