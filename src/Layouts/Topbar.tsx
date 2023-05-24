import React from "react";
import Color from "../Components/Color";
import { HeadingS } from "../Components/Typography";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { RootState } from "../Redux";

interface TopbarProps {
    title: string;
}

const Topbar: React.FC<TopbarProps> = (props) => {
    const dispatch = useDispatch();

    return (
        <>
            <View style={styles.container}>
                <HeadingS style={styles.logoText}>{props.title}</HeadingS>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingBottom: 15,
        paddingTop: 10,
        backgroundColor: Color.primary,
        borderBottomColor: Color.lightgray,
    },
    logoText: {
        color: Color.white,
        fontWeight: "bold",
        fontFamily: "poppins",
        // fontSize: ,
    },
    icon: {},
    avatar: {
        width: "14%",
        aspectRatio: 10 / 10,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: Color.lightgray,
    },
    dot: {
        borderWidth: 2,
        borderColor: Color.white,
        width: 12,
        aspectRatio: 1 / 1,
        backgroundColor: Color.error,
        borderRadius: 20,
        position: "absolute",
        right: 3,
        top: 2,
    },
    logoDot: {
        color: Color.warning,
        fontSize: 56,
    },
});

export default React.memo(Topbar);
