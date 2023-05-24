import * as React from "react";
import {StyleSheet, View} from "react-native";
import Color from "../../Components/Color";
import {LogoutAlert} from "./Alert";

function LogoutModal() {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.transparentContainer} />

				<LogoutAlert />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
	transparentContainer: {
		backgroundColor: Color.black,
		width: "100%",
		height: "100%",
		position: "absolute",
		opacity: 0.3,
	},
});

export {LogoutModal};
