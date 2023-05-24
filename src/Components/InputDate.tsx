import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Color from "./Color";

function InputDate(props: any) {
    const [dateFocus, setDateFocus] = React.useState(false);
    const [monthFocus, setMonthFocus] = React.useState(false);
    const [yearFocus, setYearFocus] = React.useState(false);

    return (
        <>
            <View style={styles.dateInputs}>
                <TextInput
                    placeholder="Date"
                    style={{
                        ...styles.inputText,
                        borderBottomColor: dateFocus
                            ? Color.primary
                            : Color.grey,
                    }}
                    keyboardType="number-pad"
                    maxLength={2}
                    onChangeText={props.handleDate}
                    value={props.date}
                    onFocus={(e) => {
                        setDateFocus(!dateFocus);
                    }}
                    onBlur={(e) => {
                        setDateFocus(!dateFocus);
                    }}
                />
                <TextInput
                    placeholder="Month"
                    style={{
                        ...styles.inputText,
                        borderBottomColor: monthFocus
                            ? Color.primary
                            : Color.grey,
                    }}
                    keyboardType="number-pad"
                    maxLength={2}
                    onChangeText={props.handleMonth}
                    value={props.month}
                    onFocus={(e) => {
                        setMonthFocus(!monthFocus);
                    }}
                    onBlur={(e) => {
                        setMonthFocus(!monthFocus);
                    }}
                />
                <TextInput
                    placeholder="Year"
                    style={{
                        ...styles.inputText,
                        borderBottomColor: yearFocus
                            ? Color.primary
                            : Color.grey,
                    }}
                    keyboardType="number-pad"
                    maxLength={4}
                    onChangeText={props.handleYear}
                    value={props.year}
                    onFocus={(e) => {
                        setYearFocus(!yearFocus);
                    }}
                    onBlur={(e) => {
                        setYearFocus(!yearFocus);
                    }}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    inputText: {
        padding: 10,
        margin: 5,
        borderBottomWidth: 2.5,
        width: 70,
        fontSize: 18,
        // borderRadius: 5,
        letterSpacing: 0.5,
    },
    dateInputs: {
        flexDirection: "row",
    },
    errorText: {
        color: "red",
        textTransform: "capitalize",
        marginLeft: 10,
    },
});

export { InputDate };
