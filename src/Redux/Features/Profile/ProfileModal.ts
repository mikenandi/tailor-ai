import {createSlice} from "@reduxjs/toolkit";

interface ProfileModalState {
	updateProfileVisible: boolean;
	privacyProfileVisible: boolean;
}

const initialState: ProfileModalState = {
	updateProfileVisible: false,
	privacyProfileVisible: false,
};

const ModalSlice = createSlice({
	name: "PROFILE_MODAL",
	initialState,
	reducers: {
		updateProfileVisibleReducer: (state) => {
			state.updateProfileVisible = !state.updateProfileVisible;
		},
		privacyProfileVisibleReducer: (state) => {
			state.privacyProfileVisible = !state.privacyProfileVisible;
		},
	},
});

export const {updateProfileVisibleReducer, privacyProfileVisibleReducer} =
	ModalSlice.actions;

export default ModalSlice.reducer;
