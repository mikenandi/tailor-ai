import * as React from "react";
import {StyleSheet, View} from "react-native";
import Color from "../../Components/Color";
import {HeadingS, Body, BodyS} from "../../Components/Typography";
import {useDispatch} from "react-redux";
import {Card} from "../../Components/Card";
import {TextButton} from "../../Components/Buttons";
import {logOutReducer} from "../../Redux/Features/Auth/AuthSlice";
import {logoutVisibleReducer} from "../../Redux/Features/Logout/LogoutModalSlice";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LogoutAlert: React.FC = () => {
	const dispatch = useDispatch();

	/* Loging out */
	const handleConfirm = async () => {
		/* Delete token and userId */
		await SecureStore.deleteItemAsync("authToken");

		dispatch(logOutReducer());

		dispatch(logoutVisibleReducer());

		return;
	};

	const handleCancel = () => {
		dispatch(logoutVisibleReducer());

		return;
	};

	return (
		<>
			<Card style={styles.container}>
				<HeadingS style={styles.titleText}>Sign out</HeadingS>

				<Body style={styles.bodyText}>Are you sure want to sign out ?</Body>

				<View style={styles.buttonsAlignContainer}>
					<View style={styles.buttonsContainer}>
						<TextButton
							action="Nope"
							onPress={handleCancel}
							textStyle={styles.noBtn}
						/>
						<TextButton action="Yes, sure" onPress={handleConfirm} />
					</View>
				</View>
			</Card>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: Color.white,
		width: "90%",
		borderRadius: 8,
		padding: 15,
	},
	titleText: {
		color: Color.dimblack,
		fontWeight: "bold",
		marginBottom: 10,
	},
	buttonsAlignContainer: {
		alignItems: "flex-end",
	},
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "90%",
	},
	noBtn: {
		color: Color.dimblack,
		// fontWeight: "normal",
	},
	bodyText: {
		color: Color.dimblack,
	},
});

export {LogoutAlert};
