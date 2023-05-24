import React from "react";
import { StyleSheet, View, Image, Modal, TouchableOpacity } from "react-native";
import Color from "../../../Components/Color";
import { useDispatch, useSelector } from "react-redux";
import {
    avatarVisibleReducer,
    cropVisibleReducer,
} from "../../../Redux/Features/Account/AccountModalSlice";
import AvatarLibrary from "../../ImageLibrary/AvatarLibrary";
import {
    clearPhotos,
    // @ts-expect-error TS(2614): Module '"../../../Redux/Features/ImageLibrary/Imag... Remove this comment to see the full error message
    clearSavedId,
} from "../../../Redux/Features/ImageLibrary/ImageSlice";
import { CropImg } from "./CropImg";
import { ModalNavBackWhite } from "../../../Components/ModalNavBack";

function SelectImg(props: any) {
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.accountModal.cropVisible;
    });

    const savedIds = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.imageLibrary.savedIds;
    });

    React.useEffect(() => {
        (() => {
            if (savedIds > 0) {
                // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
                dispatch(cropVisibleReducer());
                return;
            }
        })();
    }, []);

    const handleBack = () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(clearPhotos());
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(avatarVisibleReducer());
        return;
    };

    return (
        <>
            <ModalNavBackWhite title="Select image" handleBack={handleBack} />

            <AvatarLibrary />

            <Modal visible={visible} animationType="fade" transparent={false}>
                <CropImg />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    topBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 8,
        // backgroundColor: Color.lightgray,
    },
    cancel: {
        // backgroundColor: Color.lightgray,
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        // borderRadius: 50,
        marginRight: 10,
    },
    headerText: {
        color: Color.dimblack,
    },
});

export { SelectImg };
