import React from "react";
import { Modal, StyleSheet } from "react-native";
import Color from "../../../Components/Color";
import { MaterialIcons } from "@expo/vector-icons";
import { ProfileDetail } from "./ProfileDetail";
import { useDispatch, useSelector } from "react-redux";
import { editBirthdateVisibleReducer } from "../../../Redux/Features/Account/EditProfileModalSlice";
import { EditBirthdate } from "../EditProfile/EditBirthdate";

function Birthdate(props: any) {
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.editProfileModal.editBirthdateVisible;
    });

    const { birthdate } = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.profileDetail;
    });

    const handleEdit = () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(editBirthdateVisibleReducer());
        return;
    };

    return (
        <>
            <ProfileDetail
                label="Birthdate"
                detail={birthdate || "birthdate"}
                onEdit={handleEdit}
            >
                <MaterialIcons
                    name="insert-invitation"
                    size={24}
                    color={Color.primary}
                />
            </ProfileDetail>

            <Modal visible={visible} animationType="fade" transparent={false}>
                <EditBirthdate />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({});

export { Birthdate };
