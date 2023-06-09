import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ModalScreen } from "../../Layouts/ModalScreen";
import { ModalNavBack } from "../../Components/ModalNavBack";
import { useDispatch, useSelector } from "react-redux";
import { ButtonL } from "../../Components/Buttons";
import { RootState } from "../../Redux";
import {
    emailReducer,
    nameReducer,
    passwordReducer,
    phoneNumberReducer,
} from "../../Redux/Features/Auth/AuthSlice";
import { InputText } from "../../Components/Inputs";
import { updateProfile } from "../../Api/Services/Backend/Profile";
import { updateProfileVisibleReducer } from "../../Redux/Features/Profile/ProfileModal";
import Loader from "../../Components/Loader";
import { TextInput } from "@react-native-material/core";
import { errorMsg } from "../../Redux/Components/ErrorMsgSlice";
import { ErrorMsg } from "../../Components/ErrorMsg";
import { getMobileNumberOperator } from "../../Helpers/CheckphoneNumber";

const EditProfile: React.FC = () => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const { name, email, authToken, phoneNumber } = useSelector(
        (state: RootState) => {
            return state.auth;
        }
    );

    const handleBack = (): void => {
        dispatch(updateProfileVisibleReducer());
    };

    const handleEdit = async (): Promise<void> => {
        if (
            getMobileNumberOperator(phoneNumber) === null ||
            phoneNumber.length !== 10
        ) {
            dispatch(errorMsg("Invalid phone number"));

            return;
        }

        setIsLoading(true);

        let response = await updateProfile(
            {
                name,
                email,
                phoneNumber,
            },
            authToken
        );

        setIsLoading(false);

        handleBack();
    };

    const handlePassword = (password: string): void => {
        dispatch(passwordReducer(password));
    };

    const handleName = (name: string): void => {
        dispatch(nameReducer(name));
    };

    const handlePhoneNumber = (phonenumber: string): void => {
        dispatch(phoneNumberReducer(phonenumber));
    };

    const handleEmail = (email: string): void => {
        dispatch(emailReducer(email));
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
                        label="Name"
                        variant="standard"
                        style={styles.textInput}
                        value={name}
                        onChangeText={handleName}
                    />

                    <TextInput
                        label="Mobile"
                        variant="standard"
                        style={styles.textInput}
                        value={phoneNumber}
                        maxLength={10}
                        keyboardType="number-pad"
                        onChangeText={handlePhoneNumber}
                    />

                    <TextInput
                        label="Email"
                        variant="standard"
                        style={styles.textInput}
                        value={email}
                        onChangeText={handleEmail}
                    />

                    <ButtonL action="Save" onPress={handleEdit} />
                </ScrollView>
            </ModalScreen>
        </>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: "center",
    },
    textInput: {
        width: "80%",
        marginTop: 20,
    },
});

export { EditProfile };
