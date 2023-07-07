import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Color from "../../Components/Color";
import { useDispatch, useSelector } from "react-redux";
import { Body } from "../../Components/Typography";
import { reloadReducer } from "../../Redux/Features/Customer/CustomerDetailsSlice";
import { deleteCustomer } from "../../Api/Services/Backend/Customer";
import { RootState } from "../../Redux";
import { Button, Text } from "react-native-paper";

export const Customer: React.FC<any> = (props) => {
    const dispatch = useDispatch();

    const authToken = useSelector((state: RootState) => state.auth.authToken);
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async () => {
        setIsLoading(true);

        let response = await deleteCustomer(props.id, authToken);

        dispatch(reloadReducer());

        setIsLoading(false);
    };

    return (
        <>
            <View style={styles.detailContainer}>
                <View>
                    <View style={styles.nameContainer}>
                        <Text variant="titleMedium">
                            {props.name},{" "}
                            <Text
                                variant="bodyMedium"
                                style={styles.genderText}
                            >
                                {props.gender}
                            </Text>
                        </Text>

                        <Text variant="bodyLarge" style={styles.mobileText}>
                            {props.mobile}
                        </Text>
                    </View>

                    <View style={styles.dataContainer}>
                        <Body style={styles.detailText}>
                            Shoulder measurement
                        </Body>

                        <Body style={styles.detail}>{props.shoulder} inch</Body>
                    </View>

                    <View style={styles.dataContainer}>
                        <Body style={styles.detailText}>Waist measurement</Body>

                        <Body style={styles.detail}>{props.waist} inch</Body>
                    </View>

                    <View style={styles.dataContainer}>
                        <Body style={styles.detailText}>Leg from waist</Body>

                        <Body style={styles.detail}>{props.leg} inch</Body>
                    </View>

                    <View style={styles.dataContainer}>
                        <Body style={styles.detailText}>Leg </Body>

                        <Body style={styles.detail}>{props.leg} inch</Body>
                    </View>

                    <View style={styles.dataContainer}>
                        <Body style={styles.detailText}>Arm length</Body>

                        <Body style={styles.detail}>{props.arm} inch</Body>
                    </View>

                    <View>
                        <Button
                            mode="elevated"
                            icon="delete"
                            textColor={Color.error}
                            style={{ width: 100, marginTop: 10 }}
                            onPress={handleDelete}
                            loading={isLoading}
                        >
                            Delete
                        </Button>
                    </View>

                    <View style={styles.dataContainer}></View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        width: "100%",
    },
    detailContainer: {
        marginHorizontal: 0,
        // backgroundColor: Color.lightgray,
        borderRadius: 10,
        padding: 10,
    },
    nameContainer: {
        // fontWeight: "bold",
        borderBottomWidth: 2,
        paddingBottom: 2,
        borderBottomColor: Color.grey,
        marginBottom: 8,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    iconStyle: {
        marginRight: 10,
    },
    detailText: {
        // fontSize: 18,
    },
    dataContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 6,
    },
    detail: {
        fontWeight: "bold",
        textTransform: "capitalize",
    },
    genderText: {
        color: Color.grey,
    },
    mobileText: {
        color: Color.dimblack,
    },
});
