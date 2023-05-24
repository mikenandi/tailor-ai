import React, {useState} from "react";
import {View, StyleSheet} from "react-native";
import {Picker} from "@react-native-picker/picker";
import Color from "./Color";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Redux";
import {userTypeReducer} from "../Redux/Features/Auth/AuthSlice";

const DropdownInput: React.FC = () => {
	const dispatch = useDispatch();

	const userType: string = useSelector((state: RootState) => {
		return state.auth.userType;
	});

	const handleChange = (itemValue: string): void => {
		dispatch(userTypeReducer(itemValue));
	};

	return (
		<>
			<View style={styles.container}>
				<Picker selectedValue={userType} onValueChange={handleChange}>
					<Picker.Item
						label="Register as"
						value=""
						enabled={true}
						style={styles.labelText}
					/>
					<Picker.Item label="Driver" value="driver" />
					<Picker.Item label="Owner" value="owner" />
				</Picker>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: Color.lightgray,
		width: "80%",
		borderRadius: 100,
		marginTop: 20,
	},
	labelText: {
		color: Color.dimblack,
	},
});

export {DropdownInput};
