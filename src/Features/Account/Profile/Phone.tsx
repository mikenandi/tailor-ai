import React from "react";
import { StyleSheet, Modal } from "react-native";
import Color from "../../../Components/Color";
import { Ionicons } from "@expo/vector-icons";
import { ProfileDetail } from "./ProfileDetail";
import { useDispatch, useSelector } from "react-redux";
import { editPhoneVisibleReducer } from "../../../Redux/Features/Account/EditProfileModalSlice";
import { EditPhone } from "../EditProfile/EditPhone";
import { formatPhoneNumber } from "../../../Helpers/StringFormater";

function Phone(props: any) {
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.editProfileModal.editPhoneVisible;
    });

    const phone = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.profileDetail.phone;
    });

    const countryCode = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.profileDetail.countryCode;
    });

    const handleEdit = () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(editPhoneVisibleReducer());
        return;
    };

    return (
        <>
            <ProfileDetail
                label="Phone"
                detail={`${countryCode} ${formatPhoneNumber(phone)}`}
                onEdit={handleEdit}
            >
                <Ionicons
                    name="ios-call-outline"
                    size={24}
                    color={Color.primary}
                />
            </ProfileDetail>

            <Modal visible={visible} transparent={false} animationType="fade">
                <EditPhone />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({});

export { Phone };
