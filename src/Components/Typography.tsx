import React from "react";
import { Text, StyleSheet } from "react-native";

const typography = {
    /* Large Heading Text */
    HeadingL: function (props: any) {
        return (
            <>
                <Text
                    style={{ ...styles.headingL, ...props.style }}
                    numberOfLines={props.numberOfLines}
                >
                    {props.children}
                </Text>
            </>
        );
    },
    /* Medium Heading Text */
    HeadingM: function (props: any) {
        return (
            <>
                <Text
                    style={{ ...styles.headingM, ...props.style }}
                    numberOfLines={props.numberOfLines}
                >
                    {props.children}
                </Text>
            </>
        );
    },
    /* Small Heading Text */
    HeadingS: function (props: any) {
        return (
            <>
                <Text
                    style={{ ...styles.headingS, ...props.style }}
                    numberOfLines={props.numberOfLines}
                >
                    {props.children}
                </Text>
            </>
        );
    },
    /* Body Text */
    Body: function (props: any) {
        return (
            <>
                <Text
                    style={{ ...styles.body, ...props.style }}
                    numberOfLines={props.numberOfLines}
                >
                    {props.children}
                </Text>
            </>
        );
    },
    /* Small Body Text */
    BodyS: function (props: any) {
        return (
            <>
                <Text
                    style={{ ...styles.bodyS, ...props.style }}
                    numberOfLines={props.numberOfLines}
                >
                    {props.children}
                </Text>
            </>
        );
    },
    /* Small Caption Text */
    Caption: function (props: any) {
        return (
            <>
                <Text
                    style={{ ...styles.caption, ...props.style }}
                    numberOfLines={props.numberOfLines}
                >
                    {props.children}
                </Text>
            </>
        );
    },
    /* Button Text */
    ButtonText: function (props: any) {
        return (
            <>
                <Text
                    style={{ ...styles.buttonText, ...props.style }}
                    numberOfLines={props.numberOfLines}
                >
                    {props.children}
                </Text>
            </>
        );
    },
};

const styles = StyleSheet.create({
    headingL: {
        fontSize: 34,
        letterSpacing: 0.25,
    },
    headingM: {
        fontSize: 24,
        letterSpacing: 0,
    },
    headingS: {
        fontSize: 20,
        letterSpacing: 0.15,
    },
    body: {
        fontSize: 16,
        letterSpacing: 0.5,
        lineHeight: 24,
        // color: "#0d0d0d",
    },
    bodyS: {
        fontSize: 14,
        letterSpacing: 0.25,
        lineHeight: 20,
    },
    caption: {
        fontSize: 12,
        letterSpacing: 0.4,
    },
    buttonText: {
        fontSize: 14,
        letterSpacing: 1.25,
        textTransform: "uppercase",
        fontWeight: "500",
    },
});

export const {
    HeadingS,
    HeadingL,
    HeadingM,
    Body,
    BodyS,
    Caption,
    ButtonText,
} = typography;
