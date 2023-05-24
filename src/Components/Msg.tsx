/** function that will be returning messages */
import React from "react";
import {StyleSheet, View} from "react-native";
import {Body} from "./Typography";
import Color from "./Color";
import {useDispatch, useSelector} from "react-redux";
import {infoMsg} from "../Redux/Components/ErrorMsgSlice";
import {RootState} from "../Redux";
import {MaterialCommunityIcons} from "@expo/vector-icons";

function Msg() {
	// setting states
	const dispatch = useDispatch();

	const msg: string = useSelector((state: RootState) => {
		return state.errorMsg.info;
	});

	// Setting the state and making it disappear
	React.useEffect(() => {
		setTimeout(() => {
			dispatch(infoMsg(""));

			return;
		}, 5000);
	}, [msg]);

	return (
		<>
			{!!msg && (
				<View style={styles.container}>
					<View style={styles.msgContainer}>
						<MaterialCommunityIcons
							name="car-info"
							size={24}
							color={Color.white}
						/>
						<Body style={styles.msg}>{msg}</Body>
					</View>
				</View>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	msgContainer: {
		backgroundColor: Color.black,
		padding: 12,
		borderRadius: 50,
		position: "absolute",
		bottom: 60,
		opacity: 0.85,
		flexDirection: "row",
	},
	msg: {
		color: Color.white,
		// fontWeight: "bold",
	},
});

export {Msg};
