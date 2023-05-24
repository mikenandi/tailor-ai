import React from "react";
import {
	TextInput,
	StyleSheet,
	View,
	TouchableOpacity,
	ViewStyle,
} from "react-native";
import {Entypo} from "@expo/vector-icons";
import {Body, BodyS} from "./Typography";
import Color from "./Color";
import {HeadingS} from "./Typography";

interface Props {
	style?: ViewStyle;
	label?: string;
	value?: string;
	onChangeText?: (text: string) => void;
	maxLength?: number;
	placeholder?: string;
	multiline?: boolean;
	currency?: string;
}

const inputs = {
	/* Input text */
	InputText: function ({
		label,
		onChangeText,
		style,
		maxLength,
		multiline,
		placeholder,
		value,
	}: Props) {
		// setting states
		const [isFocused, setIsFocused] = React.useState<boolean>(false);

		return (
			<>
				<View style={styles.container}>
					<View>
						<Body style={styles.inputTextLabel}>{label}</Body>
						<View
							style={{
								...styles.inputContainer,
								borderWidth: 2.5,
								borderColor: isFocused ? Color.primary : Color.lightgray,
								backgroundColor: isFocused ? Color.white : Color.lightgray,
								...style,
							}}>
							<TextInput
								placeholder={placeholder}
								style={styles.inputText}
								maxLength={maxLength ? maxLength : 100}
								value={value}
								onChangeText={onChangeText}
								multiline={multiline}
								onFocus={(e) => {
									setIsFocused(!isFocused);
								}}
								onBlur={(e) => {
									setIsFocused(!isFocused);
								}}
							/>
						</View>
					</View>
				</View>
			</>
		);
	},
	/* Input number */
	InputNumber: function ({
		label,
		onChangeText,
		style,
		maxLength,
		multiline,
		placeholder,
		value,
	}: Props) {
		// setting states
		const [isFocused, setIsFocused] = React.useState(false);
		return (
			<>
				<View style={styles.container}>
					<View>
						<Body style={styles.inputTextLabel}>{label}</Body>
						<View
							style={{
								...styles.inputContainer,
								...style,
								borderWidth: 1.8,
								borderColor: isFocused ? Color.primary : Color.lightgray,
								backgroundColor: isFocused ? Color.white : Color.lightgray,
							}}>
							<TextInput
								placeholder={placeholder}
								style={styles.inputNumber}
								maxLength={maxLength ? maxLength : 100}
								value={value}
								onChangeText={onChangeText}
								keyboardType="number-pad"
								onFocus={(e) => {
									setIsFocused(!isFocused);
								}}
								onBlur={(e) => {
									setIsFocused(!isFocused);
								}}
							/>
						</View>
					</View>
				</View>
			</>
		);
	},
	/* Input password */
	InputPassword: function ({
		label,
		onChangeText,
		style,
		maxLength,
		multiline,
		placeholder,
		value,
	}: Props) {
		// setting states
		const [hide, setHide] = React.useState(true);
		const [isPasswordFocused, setIsPasswordfocused] = React.useState(false);

		const handleShow = () => {
			setHide(!hide);
			return;
		};

		return (
			<>
				<View style={styles.container}>
					<View>
						<Body style={styles.inputTextLabel}>{label}</Body>
						<View
							style={{
								...styles.inputPasswordContainer,
								...style,
								borderWidth: 2.5,
								borderColor: isPasswordFocused
									? Color.primary
									: Color.lightgray,
								backgroundColor: isPasswordFocused
									? Color.white
									: Color.lightgray,
							}}>
							<TextInput
								placeholder={placeholder}
								style={styles.inputPasswordText}
								maxLength={maxLength ? maxLength : 100}
								value={value}
								secureTextEntry={hide}
								onChangeText={onChangeText}
								onFocus={(e) => {
									setIsPasswordfocused(!isPasswordFocused);
								}}
								onBlur={(e) => {
									setIsPasswordfocused(!isPasswordFocused);
								}}
							/>

							<TouchableOpacity
								onPress={handleShow}
								style={styles.eyeIconContainer}>
								<Entypo
									name={hide ? "eye" : "eye-with-line"}
									size={20}
									color={Color.dimblack}
								/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</>
		);
	},
	/* Input money */
	InputMoney: function ({
		label,
		onChangeText,
		style,
		maxLength,
		currency,
		placeholder,
		value,
	}: Props) {
		const [isMoneyFocused, setIsMoneyFocused] = React.useState(false);
		return (
			<>
				<View style={styles.container}>
					<Body style={styles.inputTextLabel}>{label}</Body>
					<View
						style={{
							...styles.inputMoneyContainer,
							...style,
							borderWidth: 1.8,
							borderColor: isMoneyFocused ? Color.primary : Color.lightgray,
							backgroundColor: isMoneyFocused ? Color.white : Color.lightgray,
						}}>
						<HeadingS style={styles.currencyText}>{currency}</HeadingS>
						<TextInput
							placeholder={placeholder}
							style={styles.inputMoney}
							maxLength={maxLength ? maxLength : 10}
							value={value}
							onChangeText={onChangeText}
							keyboardType="number-pad"
							onFocus={(e) => {
								setIsMoneyFocused(!isMoneyFocused);
							}}
							onBlur={(e) => {
								setIsMoneyFocused(!isMoneyFocused);
							}}
						/>
					</View>
				</View>
			</>
		);
	},
};

const styles = StyleSheet.create({
	container: {
		marginTop: 15,
		width: "90%",
		// backgroundColor: Color.lightgray,
		justifyContent: "center",
		alignItems: "center",
	},
	inputContainer: {
		backgroundColor: Color.lightgray,
		width: "90%",
		paddingHorizontal: 10,
		// paddingVertical: 10,
		aspectRatio: 10 / 1.8,
		borderRadius: 30,
		justifyContent: "center",
	},
	inputPasswordText: {
		fontSize: 16,
		letterSpacing: 0.5,
		width: "90%",
	},
	inputText: {
		fontSize: 16,
		letterSpacing: 0.5,
	},
	inputTextLabel: {
		color: Color.dimblack,
		marginBottom: 2,
		// fontWeight: "bold",
		marginLeft: 5,
		// textTransform: "capitalize",
	},
	inputNumber: {
		fontSize: 24,
		letterSpacing: 0.5,
	},
	inputPasswordContainer: {
		backgroundColor: Color.lightgray,
		width: "90%",
		paddingHorizontal: 10,
		// paddingVertical: 10,
		aspectRatio: 10 / 1.8,
		borderRadius: 30,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	inputMoneyContainer: {
		backgroundColor: Color.lightgray,
		width: 240,
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	inputMoney: {
		fontSize: 24,
		letterSpacing: 0.5,
		width: "75%",
		height: "100%",
	},
	currencyText: {
		marginLeft: 5,
		marginRight: 5,
		width: "15%",
		color: Color.dimblack,
		textTransform: "uppercase",
	},
	eyeIconContainer: {
		// backgroundColor: Color.lightgray,
		width: "13%",
		marginRight: 10,
		aspectRatio: 10 / 10,
		alignItems: "center",
		justifyContent: "center",
	},
});

export const {InputNumber, InputPassword, InputText, InputMoney} = inputs;
