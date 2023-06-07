import React from "react";
import { StyleSheet, Modal, View, TouchableOpacity } from "react-native";
import Color from "../../Components/Color";
import { useDispatch, useSelector } from "react-redux";
import { Body, Caption, HeadingS } from "../../Components/Typography";
import {
    ICustomer,
    deleteCustomerReducer,
} from "../../Redux/Features/Customer/CustomerDetailsSlice";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Customer: React.FC<any> = (props) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteCustomerReducer(props.index));
    };

    return (
        <>
            <View style={styles.detailContainer}>
                <View>
                    <HeadingS style={styles.name}>{props.name}</HeadingS>

                    <View style={styles.dataContainer}>
                        <Body style={styles.detailText}>Chest measurement</Body>

                        <Body style={styles.detail}>{props.chest}</Body>
                    </View>

                    <View style={styles.dataContainer}>
                        <Body style={styles.detailText}>Waist measurement</Body>

                        <Body style={styles.detail}>{props.waist}</Body>
                    </View>

                    <View style={styles.dataContainer}>
                        <Body style={styles.detailText}>Hips measurement</Body>

                        <Body style={styles.detail}>{props.hips}</Body>
                    </View>

                    <View style={styles.dataContainer}>
                        <Body style={styles.detailText}>
                            Shoulder measurement
                        </Body>

                        <Body style={styles.detail}>{props.shoulder}</Body>
                    </View>

                    <View style={styles.dataContainer}>
                        <Body style={styles.detailText}>Neck measurement</Body>

                        <Body style={styles.detail}>{props.neck}</Body>
                    </View>

                    <View style={styles.dataContainer}>
                        <Body style={styles.detailText}>Arm length</Body>

                        <Body style={styles.detail}>{props.arm}</Body>
                    </View>

                    <View style={styles.dataContainer}>
                        <Body style={styles.detailText}>Bicep measurement</Body>

                        <Body style={styles.detail}>{props.bicep}</Body>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.85}
                        onPress={handleDelete}
                    >
                        <MaterialCommunityIcons
                            name="delete-circle-outline"
                            size={32}
                            color="red"
                        />
                    </TouchableOpacity>
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
    name: {
        // fontWeight: "bold",
        borderBottomWidth: 2,
        paddingBottom: 2,
        borderBottomColor: Color.grey,
        marginBottom: 8,
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
});
