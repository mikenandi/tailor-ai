import React, {ReactNode} from "react";
import {View, StyleSheet, ViewStyle} from "react-native";
import Color from "./Color";

interface CardProps {
	children: ReactNode;
	style: ViewStyle;
}

const Card: React.FC<CardProps> = (props) => {
	return (
		<>
			<View style={{...styles.card, ...props.style}}>{props.children}</View>
		</>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: Color.white,
		shadowColor: Color.black,
		shadowOffset: {width: 0.5, height: 0.5},
		shadowRadius: 10,
		shadowOpacity: 0.8,
		elevation: 3,
		borderRadius: 1,
	},
});

export {Card};
