import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { HeadingS, Body, BodyS } from "../../Components/Typography";
import Color from "../../Components/Color";
import { ModalNavBackWhite } from "../../Components/ModalNavBack";
import { ModalScreenWhite } from "../../Layouts/ModalScreen";
import { useDispatch, useSelector } from "react-redux";
import { accounntVisibleReducer } from "../../Redux/Features/Account/AccountModalSlice";
import { Ionicons } from "@expo/vector-icons";
import { EditImg } from "./EditProfile/EditImg";
import { Profile } from "./Profile";
// @ts-expect-error TS(2307): Cannot find module '../../Api/Services/RentalFeed/... Remove this comment to see the full error message
import { userProfile } from "../../Api/Services/RentalFeed/UserProfile";
import { saveProfileDataReducer } from "../../Redux/Features/Account/ProfileDetailSlice";

function Account(props: any) {
    const dispatch = useDispatch();

    const { userId, authToken } = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.auth;
    });

    let data = { userId, authToken };

    const accountModal = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.accountModal;
    });

    const editProfileModal = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.editProfileModal;
    });

    React.useEffect(() => {
        (async () => {
            let response = await userProfile(data);
            let profileData = response.data;

            dispatch(saveProfileDataReducer({ ...profileData }));

            return;
        })();
    }, [accountModal, editProfileModal]);

    const handleBack = () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(accounntVisibleReducer());

        return;
    };

    return (
        <>
            <ModalScreenWhite>
                <ModalNavBackWhite handleBack={handleBack} title="Account" />
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.avatarContainer}>
                        <EditImg />
                    </View>
                    <View>
                        <Profile />
                    </View>
                </ScrollView>
            </ModalScreenWhite>
        </>
    );
}

const styles = StyleSheet.create({
    avatarContainer: {
        alignItems: "center",
    },
    scrollContainer: {
        paddingBottom: 40,
    },
});

export { Account };
