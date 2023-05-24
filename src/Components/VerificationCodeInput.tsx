import React from "react";
import { StyleSheet, View } from "react-native";
import { HeadingM } from "./Typography";
import Color from "./Color";
import { useDispatch, useSelector } from "react-redux";

/* Input Verifcation Code */
function VerificationCodeInput(props: any) {
    const dispatch = useDispatch();

    const value = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.codeInput.verificationCode;
    });

    return (
        <>
            <View style={styles.container}>
                <View style={{ ...styles.inputCodeContainer, ...props.style }}>
                    <CodeNumber number={value[0]} />
                    <CodeNumber number={value[1]} />
                    <CodeNumber number={value[2]} />
                    <CodeNumber number={value[3]} />
                    <CodeNumber number={value[4]} />
                </View>
            </View>
        </>
    );
}

// code number
function CodeNumber(props: any) {
    return (
        <>
            <View style={styles.codeNumberContainer}>
                <HeadingM>{props.number}</HeadingM>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    inputTextLabel: {
        color: Color.dimblack,
        marginBottom: 2,
        fontWeight: "bold",
        marginLeft: 5,
        textTransform: "capitalize",
    },
    inputCode: {
        fontSize: 24,
        letterSpacing: 15,
        backgroundColor: Color.lightgray,
        width: 40,
        height: 45,
        borderRadius: 5,
        paddingLeft: 8,
    },
    inputCodeContainer: {
        backgroundColor: Color.white,
        width: 260,
        paddingVertical: 10,
        borderRadius: 10,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    inputCodeEmpty: {
        fontSize: 24,
        letterSpacing: 15,
        backgroundColor: Color.lightgray,
        width: 40,
        height: 45,
        borderRadius: 5,
        paddingLeft: 8,
        borderWidth: 1,
        borderColor: Color.primary,
    },
    codeNumberContainer: {
        backgroundColor: Color.lightgray,
        width: "17%",
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: 1 / 1,
        borderRadius: 10,
    },
});

export { VerificationCodeInput };
