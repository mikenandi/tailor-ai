import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ModalScreen } from "../../Layouts/ModalScreen";
import { ModalNavBack } from "../../Components/ModalNavBack";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux";
import {
    emailReducer,
    nameReducer,
    passwordReducer,
} from "../../Redux/Features/Auth/AuthSlice";
import { updateProfile } from "../../Api/Services/Backend/Profile";
import Loader from "../../Components/Loader";
import { TextInput } from "@react-native-material/core";
import { customerDetailsVisibleReducer } from "../../Redux/Features/Customer/CustomerModalSlice";
import { RadioButton, Button } from "react-native-paper";
import { Body } from "../../Components/Typography";
import Color from "../../Components/Color";

const ScanCustomer: React.FC = () => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] =
        React.useState<boolean>(false);
    const [selectedGender, setSelectedGender] =
        React.useState<string>("");

    const { name, email, authToken } = useSelector(
        (state: RootState) => {
            return state.auth;
        }
    );

    const handleGenderChange = (gender: string): void => {
        setSelectedGender(gender);
    };

    const handleBack = (): void => {
        dispatch(customerDetailsVisibleReducer());
    };

    const handleEdit = async (): Promise<void> => {
        setIsLoading(true);
        let response = await updateProfile(
            {
                name,
                email,
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

    const handlePhoneNumber = (
        phonenumber: string
    ): void => {};

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
                <ModalNavBack
                    title="Customer Details"
                    handleBack={handleBack}
                />

                <ScrollView
                    contentContainerStyle={
                        styles.contentContainer
                    }
                >
                    <TextInput
                        label="Customer Name"
                        variant="standard"
                        style={styles.textInput}
                        value={name}
                        onChangeText={handleName}
                    />

                    <TextInput
                        label="Mobile"
                        variant="standard"
                        style={styles.textInput}
                        onChangeText={handlePhoneNumber}
                    />

                    <View style={styles.genderContainer}>
                        <Body>Gender</Body>

                        <View>
                            <RadioButton.Group
                                onValueChange={
                                    handleGenderChange
                                }
                                value={selectedGender}
                            >
                                <RadioButton.Item
                                    label="Male"
                                    value="male"
                                />
                                <RadioButton.Item
                                    label="Female"
                                    value="female"
                                />
                            </RadioButton.Group>
                        </View>
                    </View>

                    <Button
                        icon="file"
                        mode="contained"
                        onPress={() => {}}
                        style={styles.scanButton}
                        buttonColor={Color.primary}
                    >
                        Save Measurements
                    </Button>

                    {/* <ButtonL action="UPDATE" onPress={handleEdit} /> */}
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
    genderContainer: {
        // backgroundColor: Color.lightgray,
        paddingTop: 20,
        width: "80%",
    },
    scanButton: {
        width: "80%",
        height: 40,
    },
});

export { ScanCustomer };
