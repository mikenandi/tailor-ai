import React from "react";
import { StyleSheet, Modal } from "react-native";
import Color from "../../../Components/Color";
import { Ionicons } from "@expo/vector-icons";
import { ProfileDetail } from "./ProfileDetail";
import { useDispatch, useSelector } from "react-redux";
import { EditGender } from "../EditProfile/EditGender";
import { editGenderVisibleReducer } from "../../../Redux/Features/Account/EditProfileModalSlice";

function Gender(props: any) {
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.editProfileModal.editGenderVisible;
    });

    const gender = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.profileDetail.gender;
    });

    const handleEdit = () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(editGenderVisibleReducer());
        return;
    };

    return (
        <>
            <ProfileDetail
                label="Gender"
                detail={
                    gender === "not-specified" || gender === ""
                        ? "gender"
                        : gender
                }
                onEdit={handleEdit}
            >
                <Ionicons name="ios-male" size={24} color={Color.primary} />
            </ProfileDetail>

            <Modal visible={visible} transparent={false} animationType="fade">
                <EditGender />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({});

export { Gender };
