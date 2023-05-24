import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Color from "./Color";
import { Body, HeadingS } from "./Typography";
import { Ionicons } from "@expo/vector-icons";
import { ButtonS, OutlineButtonS } from "./Buttons";

/* Modal Nav */
function ModalNav(props: any) {
    return (
        <>
            <View style={{ ...styles.container, ...props.style }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.iconBtn}
                    onPress={props.handleBack}
                >
                    <Ionicons
                        name="arrow-back-sharp"
                        size={28}
                        color={Color.white}
                    />
                </TouchableOpacity>
                <HeadingS style={styles.headerText}>{props.title}</HeadingS>

                <OutlineButtonS
                    action="next"
                    onPress={props.handleNext}
                    textStyle={styles.buttonText}
                />
            </View>
        </>
    );
}

/** Modal nav with transparent background */
function ModalNavTransparent(props: any) {
    return (
        <>
            <View style={{ ...styles.containerTransparent, ...props.style }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.iconBtn}
                    onPress={props.handleBack}
                >
                    <Ionicons
                        name="arrow-back-sharp"
                        size={28}
                        color={Color.dimblack}
                    />
                </TouchableOpacity>
                <HeadingS style={styles.headerText}>{props.title}</HeadingS>

                <ButtonS
                    action="next"
                    onPress={props.handleNext}
                    // textStyle={styles.buttonText}
                />
            </View>
        </>
    );
}

/** Modal nav done with transparent background for saving */
function ModalNavDone(props: any) {
    return (
        <>
            <View style={{ ...styles.containerTransparent, ...props.style }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.iconBtn}
                    onPress={props.handleBack}
                >
                    <Ionicons
                        name="arrow-back-sharp"
                        size={28}
                        color={Color.dimblack}
                    />
                </TouchableOpacity>
                <Body style={styles.headerText}> fuck ya</Body>

                <ButtonS
                    action="save"
                    onPress={props.handleSave}
                    // textStyle={styles.buttonText}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Color.primary,
    },
    containerTransparent: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor: Color.primary,
    },
    icon: {},
    iconBtn: {
        width: 40,
        height: 40,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        color: Color.white,
    },
    buttonText: {
        color: Color.secondary,
    },
});

export { ModalNav, ModalNavTransparent, ModalNavDone };
