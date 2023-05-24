import React, {ReactNode} from "react";
import {StyleSheet, TextStyle, TouchableOpacity, ViewStyle} from "react-native";
import Color from "./Color";

interface Props {
	onPress?: () => void;
	style?: ViewStyle | TextStyle;
	children?: ReactNode;
}

function FAB({onPress, style, children}: Props) {
	return (
		<>
			<TouchableOpacity
				onPress={onPress}
				activeOpacity={0.8}
				style={{...styles.container, ...style}}>
				{children}
			</TouchableOpacity>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Color.lightblue,
		width: 60,
		aspectRatio: 1 / 1,
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		right: 15,
		bottom: 20,
		shadowColor: Color.black,
		shadowOffset: {width: 0.9, height: 0.9},
		shadowRadius: 15,
		shadowOpacity: 1,
		elevation: 6,
		// borderRadius: 1,
	},
});

export {FAB};
