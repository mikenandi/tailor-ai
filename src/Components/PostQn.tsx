import React from "react";
import { StyleSheet, View } from "react-native";
import Color from "./Color";
import { HeadingS } from "./Typography";

function PostQn(props: any) {
    return (
        <>
            <View style={styles.container}>
                <HeadingS style={styles.qnText}>{props.question}</HeadingS>
                <View style={styles.bottomBar}>
                    <View style={styles.topline} />
                </View>
            </View>
        </>
    );
}

function BottomSheet(props: any) {
    return (
        <>
            <View style={styles.containerSheet}>
                <HeadingS style={styles.qnText}>{props.question}</HeadingS>
                <View style={styles.sheetBottomBar}>
                    <View style={styles.topline} />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.primary,
        // paddingLeft: 20,
        // paddingBottom: 10,
    },
    bottomBar: {
        padding: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: Color.white,
        alignItems: "center",
    },
    qnText: {
        color: Color.white,
        marginLeft: 20,
        // fontWeight: "bold",
        marginBottom: 10,
        // textAlign: "center",
    },
    topline: {
        aspectRatio: 10 / 0.8,
        backgroundColor: Color.grey,
        width: "15%",
        borderRadius: 25,
    },
    containerSheet: {
        backgroundColor: Color.primary,
        width: "100%",
    },
    sheetBottomBar: {
        padding: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: Color.white,
        alignItems: "center",
    },
});

export { PostQn, BottomSheet };
