import React from "react";
import { StyleSheet, Modal } from "react-native";
import Color from "../../../Components/Color";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ProfileDetail } from "./ProfileDetail";
import { useDispatch, useSelector } from "react-redux";
import { editPasswordVisibleReducer } from "../../../Redux/Features/Account/EditProfileModalSlice";
import { EditPassword } from "../EditProfile/EditPassword";

function Password(props: any) {
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.editProfileModal.editPasswordVisible;
    });

    const password = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.profileDetail.password;
    });

    const handleEdit = () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(editPasswordVisibleReducer());

        return;
    };

    // the following are comments
    return (
        <>
            <ProfileDetail
                label="Password"
                detail={password}
                onEdit={handleEdit}
            >
                <MaterialCommunityIcons
                    name="key"
                    size={24}
                    color={Color.primary}
                />
            </ProfileDetail>

            <Modal visible={visible} animationType="fade" transparent={false}>
                <EditPassword />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({});

export { Password };
