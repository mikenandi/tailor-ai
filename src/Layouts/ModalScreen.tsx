import React from "react";
import {
    StatusBar,
    StyleSheet,
    View,
    SafeAreaView,
    Platform,
} from "react-native";
import Color from "../Components/Color";
import { Msg } from "../Components/Msg";

function ModalScreen(props: any) {
    if (Platform.OS === "android") {
        return (
            <>
                <View style={styles.container}>
                    <StatusBar backgroundColor={Color.primary} />

                    {props.children}
                </View>
                {/* msg to user */}
                <Msg />
            </>
        );
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View>
                    {/* <StatusBar backgroundColor={Color.lightgray} /> */}

                    {props.children}
                </View>
            </SafeAreaView>
        </>
    );
}

function ModalScreenWhite(props: any) {
    if (Platform.OS === "android") {
        return (
            <>
                <View style={styles.container}>
                    <StatusBar backgroundColor={Color.white} />

                    {props.children}
                </View>
                {/* msg to user */}
                <Msg />
            </>
        );
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View>
                    <StatusBar backgroundColor={Color.lightgray} />

                    {props.children}
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
    },
    iosContainer: {
        paddingTop: 50,
    },
});

export { ModalScreen, ModalScreenWhite };
