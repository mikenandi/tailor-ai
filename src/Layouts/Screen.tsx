import React from "react";
import {
	StatusBar,
	StyleSheet,
	View,
	SafeAreaView,
	Platform,
} from "react-native";
import Color from "../Components/Color";
import Topbar from "./Topbar";
import {Msg} from "../Components/Msg";

function Screen(props: any) {
	// console.log(Platform.OS);
	if (Platform.OS === "android") {
		return (
			<>
				<View style={styles.container}>
					<StatusBar backgroundColor={Color.primary} />
					{/* <Topbar /> */}
					{props.children}
				</View>

				<Msg />
			</>
		);
	}

	return (
		<>
			<SafeAreaView style={styles.container}>
				<View>
					{/* <StatusBar backgroundColor={Color.primary} /> */}
					{/* <Topbar /> */}
					{props.children}
				</View>
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Color.white,
	},
	iosContainer: {
		paddingTop: 50,
	},
});

export default React.memo(Screen);
