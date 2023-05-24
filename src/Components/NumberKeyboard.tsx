import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { HeadingL } from "./Typography";
import Color from "./Color";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import {
    deleteCodeReducer,
    saveCodeReducer,
} from "../Redux/Components/CodeInputSlice";

// atomic number component
function Key(props: any) {
    return (
        <>
            <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
                <View style={styles.numberContainer}>
                    {props.children}
                    <HeadingL style={styles.keyText}>{props.number}</HeadingL>
                </View>
            </TouchableOpacity>
        </>
    );
}

// custom number keyboard
function NumberKeyBoard(props: any) {
    const dispatch = useDispatch();

    return (
        <>
            <View style={styles.container}>
                {/* first row holding 1,2,3 */}
                <View style={styles.rowContainer}>
                    <Key
                        number="1"
                        onPress={() => {
                            dispatch(saveCodeReducer("1"));
                        }}
                    />
                    <Key
                        number="2"
                        onPress={() => {
                            dispatch(saveCodeReducer("2"));
                        }}
                    />
                    <Key
                        number="3"
                        onPress={() => {
                            dispatch(saveCodeReducer("3"));
                        }}
                    />
                </View>

                {/* second row holding 4,5,6 */}
                <View style={styles.rowContainer}>
                    <Key
                        number="4"
                        onPress={() => {
                            dispatch(saveCodeReducer("4"));
                        }}
                    />
                    <Key
                        number="5"
                        onPress={() => {
                            dispatch(saveCodeReducer("5"));
                        }}
                    />
                    <Key
                        number="6"
                        onPress={() => {
                            dispatch(saveCodeReducer("6"));
                        }}
                    />
                </View>

                {/* fourth row holding 7,8,9 */}
                <View style={styles.rowContainer}>
                    <Key
                        number="7"
                        onPress={() => {
                            dispatch(saveCodeReducer("7"));
                        }}
                    />
                    <Key
                        number="8"
                        onPress={() => {
                            dispatch(saveCodeReducer("8"));
                        }}
                    />
                    <Key
                        number="9"
                        onPress={() => {
                            dispatch(saveCodeReducer("9"));
                        }}
                    />
                </View>

                {/* last row holiding 0 and delete  */}
                <View style={styles.rowContainer}>
                    <Key number="" />
                    <Key
                        number="0"
                        onPress={() => {
                            dispatch(saveCodeReducer("0"));
                        }}
                    />

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                            // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
                            dispatch(deleteCodeReducer());
                        }}
                    >
                        <View style={styles.numberContainer}>
                            <Feather
                                name="delete"
                                size={22}
                                color={Color.dimblack}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        backgroundColor: Color.white,
        shadowColor: Color.primary,
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowRadius: 10,
        shadowOpacity: 0.8,
        elevation: 10,
        borderRadius: 1,
    },
    numberContainer: {
        width: 50,
        aspectRatio: 1 / 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
    },
    rowContainer: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
        // backgroundColor: Color.lightblue,
        marginVertical: 2.5,
    },
    keyText: {
        color: Color.dimblack,
    },
});

export { NumberKeyBoard };
