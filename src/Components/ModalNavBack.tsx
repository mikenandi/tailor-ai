import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Color from "./Color";
import { HeadingS } from "./Typography";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { ErrorMsg } from "./ErrorMsg";

interface Props {
    title: string;
    handleBack: () => void;
}

function ModalNavBack({ title, handleBack }: Props) {
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.iconBtnPrimary}
                    onPress={handleBack}
                >
                    <Ionicons
                        name="arrow-back-sharp"
                        size={28}
                        color={Color.white}
                    />
                </TouchableOpacity>
                <HeadingS numberOfLines={1} style={styles.titleTxtPrimary}>
                    {title}
                </HeadingS>
            </View>

            <View style={styles.errorMsgContainer}>
                <ErrorMsg />
            </View>
        </>
    );
}

function ModalNavBackWhite({ title, handleBack }: Props) {
    return (
        <>
            <View style={styles.containerWhite}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.iconBtn}
                    onPress={handleBack}
                >
                    <MaterialIcons
                        name="close"
                        size={28}
                        color={Color.dimblack}
                    />
                </TouchableOpacity>
                <HeadingS numberOfLines={1} style={styles.titleTxt}>
                    {title}
                </HeadingS>
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
        backgroundColor: Color.primary,
    },
    containerWhite: {
        paddingHorizontal: 25,
        paddingVertical: 15,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Color.white,
    },
    icon: {},
    iconBtn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.lightgray,
        marginRight: 10,
    },
    iconBtnPrimary: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.primary,
        marginRight: 10,
    },

    titleTxt: {
        color: Color.white,
        width: "70%",
    },
    titleTxtPrimary: {
        color: Color.white,
        width: "70%",
    },
    errorMsgContainer: {
        marginTop: 10,
        alignItems: "center",
    },
});

export { ModalNavBack, ModalNavBackWhite };
