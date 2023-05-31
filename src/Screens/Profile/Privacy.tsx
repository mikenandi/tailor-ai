import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { ModalScreen } from "../../Layouts/ModalScreen";
import { ModalNavBack } from "../../Components/ModalNavBack";
import { useDispatch, useSelector } from "react-redux";
import { ButtonL } from "../../Components/Buttons";
import { RootState } from "../../Redux";
import {
    logOutReducer,
    passwordReducer,
    oldPasswordReducer,
} from "../../Redux/Features/Auth/AuthSlice";
import { deleteUser, updateProfile } from "../../Api/Services/Backend/Profile";
import { privacyProfileVisibleReducer } from "../../Redux/Features/Profile/ProfileModal";
import Loader from "../../Components/Loader";
import { errorMsg } from "../../Redux/Components/ErrorMsgSlice";
import { Body } from "../../Components/Typography";
import Color from "../../Components/Color";
import * as SecureStorage from "expo-secure-store";
import { TextInput } from "@react-native-material/core";

const Privacy: React.FC = () => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const { password, authToken, oldPassword } = useSelector(
        (state: RootState) => {
            return state.auth;
        }
    );

    const handleBack = (): void => {
        dispatch(passwordReducer(""));
        dispatch(privacyProfileVisibleReducer());
    };

    const handleEdit = async (): Promise<void> => {
        if (password !== undefined && password.length < 6) {
            dispatch(
                errorMsg("password length should have greater than 6 chars")
            );

            return;
        }

        setIsLoading(true);

        let response = await updateProfile(
            {
                password,
                oldPassword,
            },
            authToken
        );

        setIsLoading(false);

        handleBack();
    };

    const handleOldPassword = (oldPassword: string): void => {
        dispatch(oldPasswordReducer(oldPassword));
    };

    const handlePassword = (password: string): void => {
        dispatch(passwordReducer(password));
    };

    const handleDelete = async (): Promise<void> => {
        let response = await deleteUser(authToken);

        await SecureStorage.deleteItemAsync("authToken");

        dispatch(logOutReducer());
    };

    if (isLoading) {
        return (
            <>
                <Loader />
            </>
        );
    }

    return (
        <>
            <ModalScreen>
                <ModalNavBack title="Edit profile" handleBack={handleBack} />

                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <TextInput
                        label="Old Password"
                        variant="standard"
                        style={styles.passwordInput}
                        value={oldPassword}
                        onChangeText={handleOldPassword}
                        color={Color.primary}
                        secureTextEntry={true}
                    />

                    <TextInput
                        label="New Password"
                        variant="standard"
                        style={styles.passwordInput}
                        value={password}
                        onChangeText={handlePassword}
                        color={Color.primary}
                        secureTextEntry={true}
                    />

                    <ButtonL action="UPDATE" onPress={handleEdit} />

                    <TouchableOpacity
                        activeOpacity={0.85}
                        onPress={handleDelete}
                        style={styles.deleteBtn}
                    >
                        <Body style={styles.deleteText}>Delete Account</Body>
                    </TouchableOpacity>
                </ScrollView>
            </ModalScreen>
        </>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: "center",
    },
    deleteBtn: {
        width: "80%",
        backgroundColor: Color.lightred,
        marginTop: 30,
        padding: 20,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    deleteText: {
        color: Color.error,
        fontWeight: "bold",
    },
    passwordInput: {
        width: "80%",
        marginTop: 20,
    },
});

export { Privacy };
