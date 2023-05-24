import React from "react";
import { StyleSheet, Modal } from "react-native";
import Color from "../../../Components/Color";
import { Ionicons } from "@expo/vector-icons";
import { ProfileDetail } from "./ProfileDetail";
import { EditName } from "../EditProfile/EditName";
import { useDispatch, useSelector } from "react-redux";
import { editNameVisibleReducer } from "../../../Redux/Features/Account/EditProfileModalSlice";

function Name(props: any) {
    const dispatch = useDispatch();

    const name = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.profileDetail.name;
    });

    const visible = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.editProfileModal.editNameVisible;
    });

    const handleEdit = () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(editNameVisibleReducer());
        return;
    };

    return (
        <>
            <ProfileDetail label="Name" detail={name} onEdit={handleEdit}>
                <Ionicons
                    name="person-outline"
                    size={24}
                    color={Color.primary}
                />
            </ProfileDetail>

            <Modal transparent={false} visible={visible} animationType="fade">
                <EditName />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({});

export { Name };
