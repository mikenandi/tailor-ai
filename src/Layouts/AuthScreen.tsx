import React from "react";
import {
    StatusBar,
    StyleSheet,
    ScrollView,
    View,
    Platform,
    SafeAreaView,
    Modal,
} from "react-native";
import Color from "../Components/Color";

function AuthScreen(props: any) {
    if (Platform.OS === "android") {
        return (
            <>
                <ScrollView
                    style={styles.scrollContainer}
                    contentContainerStyle={styles.contentContainer}
                >
                    <StatusBar backgroundColor={Color.white} />
                    <View style={styles.container}>{props.children}</View>
                </ScrollView>
            </>
        );
    }

    return (
        <>
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.contentContainer}
            >
                <StatusBar backgroundColor={Color.white} />
                <View style={styles.container}>{props.children}</View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
        alignItems: "center",
        justifyContent: "center",
    },
    scrollContainer: {
        backgroundColor: Color.white,
    },
    contentContainer: {
        flexGrow: 1,
        justifyContent: "center",
    },
});

export default React.memo(AuthScreen);
