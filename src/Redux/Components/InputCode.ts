import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        firstCode: "",
        secondCode: "",
        thirdCode: "",
        fourthCode: "",
        fifthCode: "",
    },
    editable: {
        firstCode: true,
        secondCode: false,
        thirdCode: false,
        fourthCode: false,
        fifthCode: false,
    },
    verificationCode: "",
};

const inputCodeSlice = createSlice({
    name: "INPUT_CODE",
    initialState,
    reducers: {
        saveFirstCode: (state, actions) => {
            state.value.firstCode = actions.payload;
            state.editable.secondCode = true;
            state.verificationCode = `${state.value.firstCode}${state.value.secondCode}${state.value.thirdCode}${state.value.fourthCode}${state.value.fifthCode}`;
        },
        saveSecondCode: (state, actions) => {
            state.value.secondCode = actions.payload;

            state.editable.thirdCode = true;
            state.verificationCode = `${state.value.firstCode}${state.value.secondCode}${state.value.thirdCode}${state.value.fourthCode}${state.value.fifthCode}`;
        },
        saveThirdCode: (state, actions) => {
            state.value.thirdCode = actions.payload;

            state.editable.fourthCode = true;
            state.verificationCode = `${state.value.firstCode}${state.value.secondCode}${state.value.thirdCode}${state.value.fourthCode}${state.value.fifthCode}`;
        },
        saveFourthCode: (state, actions) => {
            state.value.fourthCode = actions.payload;
            state.editable.fifthCode = true;
            state.verificationCode = `${state.value.firstCode}${state.value.secondCode}${state.value.thirdCode}${state.value.fourthCode}${state.value.fifthCode}`;
        },
        saveFifthCode: (state, actions) => {
            state.value.fifthCode = actions.payload;
            state.verificationCode = `${state.value.firstCode}${state.value.secondCode}${state.value.thirdCode}${state.value.fourthCode}${state.value.fifthCode}`;
        },
        deleteCode: (state, actions) => {
            Object.assign(state.value, initialState.value);
            state.verificationCode = "";
        },
    },
});

export const {
    saveFifthCode,
    saveFirstCode,
    saveFourthCode,
    saveSecondCode,
    saveThirdCode,
    deleteCode,
} = inputCodeSlice.actions;

export default inputCodeSlice.reducer;
