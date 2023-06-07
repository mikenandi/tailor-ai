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
import {
    customerDetailsVisibleReducer,
    hideCustomerModalsReducer,
} from "../../Redux/Features/Customer/CustomerModalSlice";
import { RadioButton, Button } from "react-native-paper";
import { Body } from "../../Components/Typography";
import Color from "../../Components/Color";
import {
    saveCustomerReducer,
    saveMeasurementsReducer,
} from "../../Redux/Features/Customer/CustomerDetailsSlice";
import { errorMsg } from "../../Redux/Components/ErrorMsgSlice";

const ScanCustomer: React.FC = () => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [selectedGender, setSelectedGender] = React.useState<string>("");

    const customer = useSelector((state: RootState) => {
        return state.customers.customer;
    });

    const { email, authToken } = useSelector((state: RootState) => {
        return state.auth;
    });

    const handleGenderChange = (gender: string): void => {
        setSelectedGender(gender);
    };

    const handleBack = (): void => {
        dispatch(customerDetailsVisibleReducer());
    };

    const handlePassword = (password: string): void => {
        dispatch(passwordReducer(password));
    };

    const handleName = (name: string): void => {
        dispatch(nameReducer(name));
    };

    const handlePhoneNumber = (phonenumber: string): void => {};

    const handleEmail = (email: string): void => {
        dispatch(emailReducer(email));
    };

    const handleSave = () => {
        if (!customer.name || !customer.mobile || !customer.gender) {
            dispatch(errorMsg("Fill all fields before submiting"));

            return;
        }

        dispatch(saveCustomerReducer());
        dispatch(hideCustomerModalsReducer());

        return;
    };

    const handleChange = (name: string, value: string) => {
        dispatch(saveMeasurementsReducer({ name, value }));
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

                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <TextInput
                        label="Customer Name"
                        variant="standard"
                        style={styles.textInput}
                        value={customer?.name}
                        onChangeText={(value) => {
                            handleChange("name", value);
                        }}
                    />

                    <TextInput
                        label="Mobile"
                        variant="standard"
                        style={styles.textInput}
                        keyboardType="numeric"
                        value={customer?.mobile}
                        onChangeText={(value) => {
                            handleChange("mobile", value);
                        }}
                    />

                    <View style={styles.genderContainer}>
                        <Body>Gender</Body>

                        <View>
                            <RadioButton.Group
                                onValueChange={(value) => {
                                    handleChange("gender", value);
                                }}
                                value={customer?.gender}
                            >
                                <RadioButton.Item label="Male" value="male" />
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
                        onPress={handleSave}
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
