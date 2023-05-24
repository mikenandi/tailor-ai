import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    photos: [],
    savedIds: [],
    selectedImages: [],
};

export const imageSlice = createSlice({
    name: "IMAGES_LIBRARY",
    initialState,
    reducers: {
        saveFromLibrary: (state, actions) => {
            state.photos = actions.payload;
        },
        saveSelectedIds: (state, actions) => {
            let selectedId = actions.payload;
            // @ts-expect-error TS(2345): Argument of type 'any' is not assignable to parame... Remove this comment to see the full error message
            state.savedIds.push(selectedId);

            let selectedImg = state.photos.filter(
                // @ts-expect-error TS(2339): Property 'id' does not exist on type 'never'.
                (photo) => photo.id === selectedId
            );

            // @ts-expect-error TS(2345): Argument of type 'undefined' is not assignable to ... Remove this comment to see the full error message
            state.selectedImages.push(selectedImg[0]);
        },
        removeSelectedId: (state, actions) => {
            let selectedId = actions.payload;

            state.savedIds = state.savedIds.filter(
                (savedId) => savedId !== selectedId
            );

            state.selectedImages.filter(
                // @ts-expect-error TS(2339): Property 'id' does not exist on type 'never'.
                (selectedImg) => selectedImg.id !== selectedId
            );
        },
        clearPhotos: (state, actions) => {
            Object.assign(state, initialState);
        },
        clearSelectedImages: (state, actions) => {
            state.savedIds = [];
            state.selectedImages = [];
        },
    },
});

export const {
    saveFromLibrary,
    saveSelectedIds,
    removeSelectedId,
    clearPhotos,
    clearSelectedImages,
} = imageSlice.actions;

export default imageSlice.reducer;
