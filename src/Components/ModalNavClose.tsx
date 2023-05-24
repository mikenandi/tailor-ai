import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Color from "./Color";
import { HeadingS } from "./Typography";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";

function ModalNavClose(props: any) {
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.3}
                    style={styles.iconBtn}
                    onPress={props.handleClose}
                >
                    <MaterialIcons
                        name="close"
                        size={28}
                        color={Color.white}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: Color.primary,
    },
    icon: {},
    iconBtn: {
        width: 40,
        height: 40,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
});

export { ModalNavClose };
