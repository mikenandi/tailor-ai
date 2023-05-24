import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Color from "./Color";
import { Body } from "./Typography";
import { useDispatch } from "react-redux";

function InputMobileNumber(props: any) {
    const [isFocused, setIsFocused] = React.useState(false);

    return (
        <>
            <View
                style={{
                    ...styles.numberInputContainer,
                    backgroundColor: isFocused ? Color.white : Color.lightgray,
                    borderColor: isFocused ? Color.primary : Color.lightgray,
                }}
            >
                <View style={styles.countryCodeContainer}>
                    <Body style={styles.countryCode}>{props.countryCode}</Body>
                </View>
                <TextInput
                    placeholder=""
                    style={styles.numberInput}
                    keyboardType="number-pad"
                    onChangeText={props.onChangeText}
                    value={props.value}
                    maxLength={11}
                    onFocus={(e) => {
                        setIsFocused(!isFocused);
                    }}
                    onBlur={(e) => {
                        setIsFocused(!isFocused);
                    }}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    countryCode: {
        fontSize: 20,
    },
    numberInput: {
        fontSize: 20,
    },
    numberInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Color.lightgray,
        width: "80%",
        aspectRatio: 10 / 2,
        borderRadius: 10,
        borderWidth: 1.8,
    },
    countryCodeContainer: {
        width: "30%",
        alignItems: "center",
        justifyContent: "center",
    },
});

export { InputMobileNumber };
