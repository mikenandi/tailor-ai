import {createSlice} from "@reduxjs/toolkit";

interface ModalState {
	logoutVisible: boolean;
}

const initialState: ModalState = {
	logoutVisible: false,
};

const modalSlice = createSlice({
	name: "LOGOUT_MODAL_SLICE",
	initialState,
	reducers: {
		logoutVisibleReducer: (state) => {
			state.logoutVisible = !state.logoutVisible;
		},
	},
});

export const {logoutVisibleReducer} = modalSlice.actions;

export default modalSlice.reducer;
