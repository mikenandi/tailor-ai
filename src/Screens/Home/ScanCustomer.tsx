import React from "react";
import { Modal, ScrollView, StyleSheet, View } from "react-native";
import { ModalScreen } from "../../Layouts/ModalScreen";
import { ModalNavBack } from "../../Components/ModalNavBack";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux";
import { TextInput } from "@react-native-material/core";
import {
    customerDetailsVisibleReducer,
    hideCustomerModalsReducer,
    scanCustomerVisibleReducer,
} from "../../Redux/Features/Customer/CustomerModalSlice";
import { RadioButton, Button, Text } from "react-native-paper";
import { Body } from "../../Components/Typography";
import Color from "../../Components/Color";
import {
    deleteCustomerReducer,
    reloadReducer,
    saveCustomerReducer,
    saveMeasurementsReducer,
} from "../../Redux/Features/Customer/CustomerDetailsSlice";
import { errorMsg } from "../../Redux/Components/ErrorMsgSlice";
import { ScanCamera } from "./ScanCamera";
import { postCustomers } from "../../Api/Services/Backend/Customer";
import Loader from "../../Components/Loader";
import { getMobileNumberOperator } from "../../Helpers/CheckphoneNumber";

const ScanCustomer: React.FC = () => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const customer = useSelector((state: RootState) => {
        return state.customers.customer;
    });

    const { authToken } = useSelector((state: RootState) => state.auth);

    const visible: boolean = useSelector((state: RootState) => {
        return state.scanCustomerModal.scanCustomerVisible;
    });

    // console.log(customer);

    const handleBack = (): void => {
        dispatch(customerDetailsVisibleReducer());
    };

    const handleSave = async (): Promise<void> => {
        if (
            !customer.name ||
            !customer.mobile ||
            !customer.gender ||
            !customer.height
        ) {
            dispatch(errorMsg("Fill all fields before submiting"));

            return;
        }

        if (
            getMobileNumberOperator(customer.mobile) === null ||
            customer.mobile.length !== 10
        ) {
            dispatch(errorMsg("Invalid phone number"));

            return;
        }
        setIsLoading(true);

        const inputs = {
            name: customer.name,
            mobile: customer.mobile,
            gender: customer.gender,
            height: Number(customer.height),
            chest: !customer.chest ? 0 : Number(customer.chest),
            shoulder: Number(customer.shoulder),
            arm: Number(customer.arm),
            leg: Number(customer.leg),
            waist: Number(customer.waist),
            waistToShoulder: Number(customer.waistToShoulder),
        };

        let response = await postCustomers(authToken, inputs);

        dispatch(deleteCustomerReducer());
        dispatch(hideCustomerModalsReducer());
        dispatch(reloadReducer());

        setIsLoading(false);
    };

    const handleOpenCamera = (): void => {
        if (
            !customer.name ||
            !customer.mobile ||
            !customer.gender ||
            !customer.height
        ) {
            dispatch(errorMsg("Fill all Details before takiing picture"));

            return;
        }

        if (
            getMobileNumberOperator(customer.mobile) === null ||
            customer.mobile.length !== 10
        ) {
            dispatch(errorMsg("Invalid phone number"));

            return;
        }

        dispatch(scanCustomerVisibleReducer());
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
                        label="Name"
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
                        maxLength={10}
                        value={customer?.mobile}
                        onChangeText={(value) => {
                            handleChange("mobile", value);
                        }}
                    />

                    <TextInput
                        label="Height in cm"
                        variant="standard"
                        maxLength={3}
                        style={styles.textInput}
                        keyboardType="numeric"
                        value={customer?.height}
                        onChangeText={(value) => {
                            handleChange("height", value);
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

                    <View style={styles.imageContainer}>
                        <Text variant="bodyLarge">Take photo</Text>

                        <Button
                            icon="camera"
                            mode="outlined"
                            onPress={handleOpenCamera}
                            // style={styles.scanButton}
                            // buttonColor={Color.lightgray}
                        >
                            Camera
                        </Button>
                    </View>

                    {customer.shoulder && (
                        <View style={styles.resultsMeasurementContainer}>
                            {customer.chest && (
                                <Text variant="bodyMedium">
                                    Leg: {customer.chest} Inch
                                </Text>
                            )}

                            <Text variant="bodyMedium">
                                shoulder: {customer.shoulder} Inch
                            </Text>
                            <Text variant="bodyMedium">
                                arm: {customer.arm}
                            </Text>
                            <Text variant="bodyMedium">
                                leg: {customer.leg} Inch
                            </Text>
                            <Text variant="bodyMedium">
                                waist: {customer.waist} Inch
                            </Text>
                            <Text variant="bodyMedium">
                                waist to shoulder: {customer.waistToShoulder}{" "}
                                Inch
                            </Text>
                        </View>
                    )}

                    <Button
                        icon="file"
                        mode="contained"
                        onPress={handleSave}
                        style={styles.scanButton}
                        buttonColor={Color.primary}
                    >
                        Save Measurements
                    </Button>
                </ScrollView>
            </ModalScreen>

            <Modal visible={visible}>
                <ScanCamera />
            </Modal>
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
        marginTop: 20,
    },
    imageContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
        marginTop: 10,
    },
    resultsMeasurementContainer: {
        width: "80%",
        backgroundColor: Color.lightgray,
        marginTop: 15,
        padding: 10,
    },
});

export { ScanCustomer };
