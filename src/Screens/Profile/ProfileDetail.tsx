import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Body, HeadingS } from "../../Components/Typography";
import { Octicons } from "@expo/vector-icons";
import Color from "../../Components/Color";

interface Props {
    children: ReactNode;
    value: string;
    label: string;
}

function ProfileDetail(props: Props) {
    const dispatch = useDispatch();

    return (
        <>
            <View style={styles.detailContainer}>
                <View style={styles.iconContainer}>{props.children}</View>
                <View>
                    <Body style={styles.labelText}>{props.label}</Body>
                    <Body style={styles.valueText}>{props.value}</Body>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    detailContainer: {
        marginHorizontal: 20,
        marginTop: 30,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    iconContainer: {
        backgroundColor: Color.white,
        width: 60,
        aspectRatio: 10 / 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginRight: 15,
    },
    labelText: {
        color: Color.dimblack,
    },
    valueText: {
        fontWeight: "bold",
    },
});

export { ProfileDetail };
