import React from "react";
import { StyleSheet, Modal, View } from "react-native";
import Color from "../../Components/Color";
import { useDispatch, useSelector } from "react-redux";
import { Body, HeadingS } from "../../Components/Typography";

export const Customer: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <>
            <View style={styles.detailContainer}>
                <View>
                    <HeadingS style={styles.name}>Mussa Selemani</HeadingS>

                    <View style={styles.dataContainer}>
                        <Body style={styles.detailText}>Chest measurement</Body>

                        <Body style={styles.detail}>12 INCH</Body>
                    </View>

                    <View style={styles.dataContainer}>
                        <Body style={styles.detailText}>Waist measurement</Body>

                        <Body style={styles.detail}>12 INCH</Body>
                    </View>

                    <View style={styles.dataContainer}>
                        <Body style={styles.detailText}>Hips measurement</Body>

                        <Body style={styles.detail}>12 INCH</Body>
                    </View>

                    <View style={styles.dataContainer}>
                        <Body style={styles.detailText}>
                            Shoulder measurement
                        </Body>

                        <Body style={styles.detail}>12 INCH</Body>
                    </View>

                    <View style={styles.dataContainer}>
                        <Body style={styles.detailText}>Neck measurement</Body>

                        <Body style={styles.detail}>12 INCH</Body>
                    </View>

                    <View style={styles.dataContainer}>
                        <Body style={styles.detailText}>Arm length</Body>

                        <Body style={styles.detail}>12 INCH</Body>
                    </View>

                    <View style={styles.dataContainer}>
                        <Body style={styles.detailText}>Becep measurement</Body>

                        <Body style={styles.detailText}>12 INCH</Body>
                    </View>
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
        borderBottomColor: Color.primary,
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
    },
});
