import React from "react";
import { StatusBar, View, StyleSheet } from "react-native";
import Color from "./Color";
import { ActivityIndicator } from "@react-native-material/core";

const Loader: React.FC = (props) => {
    return (
        <>
            <View style={styles.screen}>
                <StatusBar backgroundColor="white" />

                <ActivityIndicator size={64} color={Color.primary} />
            </View>
        </>
    );
};

const Loading: React.FC = (props) => {
    return (
        <>
            <View style={styles.transparentContainer} />
            <View style={styles.container}>
                <ActivityIndicator
                    animating={true}
                    size="large"
                    color={Color.primary}
                    style={styles.activityIndicator}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: Color.black,
        // opacity: 0.2,
    },
    activityIndicator: {
        width: "20%",
        aspectRatio: 1 / 1,
        transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }],
    },
    transparentContainer: {
        backgroundColor: Color.black,
        width: "100%",
        height: "100%",
        position: "absolute",
        opacity: 0.5,
    },
});

export { Loading };

export default React.memo(Loader);
