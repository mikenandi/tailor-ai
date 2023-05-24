import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	verificationCode: "",
};

const codeInputSlice = createSlice({
	name: "CODE_INPUT",
	initialState,
	reducers: {
		saveCodeReducer: (state, actions) => {
			if (state.verificationCode.length < 5) {
				state.verificationCode = `${state.verificationCode}${actions.payload}`;
			}
		},
		deleteCodeReducer: (state, actions) => {
			let codeEnd = state.verificationCode.length - 1;

			state.verificationCode = state.verificationCode.substring(0, codeEnd);
		},
	},
});

export const {saveCodeReducer, deleteCodeReducer} = codeInputSlice.actions;

export default codeInputSlice.reducer;
