import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Color from "../../../Components/Color";
import { Body } from "../../../Components/Typography";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ProfileDetail(props: any) {
    return (
        <View style={styles.detailContainer}>
            {props.children}
            <View style={styles.detailsTextContainer}>
                <View>
                    <Body style={styles.labelText}>{props.label}</Body>
                    <Body>{props.detail}</Body>
                </View>
                <TouchableOpacity activeOpacity={0.75} onPress={props.onEdit}>
                    <MaterialCommunityIcons
                        name="pencil"
                        size={20}
                        color={Color.grey}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 25,
        justifyContent: "flex-start",
        // alignItems: "center",
    },
    detailsTextContainer: {
        marginLeft: 15,
        borderBottomWidth: 1,
        width: "80%",
        paddingBottom: 5,
        borderBottomColor: Color.lightgray,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    labelText: {
        color: Color.dimblack,
    },
});

export { ProfileDetail };
