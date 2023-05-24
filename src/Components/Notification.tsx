import React from "react";
import Color from "../Components/Color";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {StyleSheet, View, TouchableOpacity, Modal, Text} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {notificationVisibleReducer} from "../Redux/Features/ReportBreakdown/NotificationModalSlice";
import {Notifications} from "../Features/ReportBreakdown";

function Notification(props: any) {
	const dispatch = useDispatch();

	const visible = useSelector((state) => {
		// @ts-expect-error TS(2571): Object is of type 'unknown'.
		return state.notificationModal.notificationVisible;
	});

	const handleNotification = () => {
		// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
		dispatch(notificationVisibleReducer());

		return;
	};

	return (
		<>
			{/* Hightlighting component */}
			<TouchableOpacity
				// underlayColor={Color.dimblack}
				activeOpacity={0.8}
				onPress={handleNotification}>
				<View style={styles.container}>
					<MaterialCommunityIcons
						name="bell-ring"
						size={28}
						color={Color.warning}
					/>
				</View>
			</TouchableOpacity>

			<Modal transparent={false} animationType="fade" visible={visible}>
				<Notifications />
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
	dot: {
		borderWidth: 2,
		borderColor: Color.white,
		width: 12,
		aspectRatio: 1 / 1,
		backgroundColor: Color.error,
		borderRadius: 20,
		position: "absolute",
		right: 3,
		top: 2,
	},
	logoDot: {
		color: Color.warning,
		fontSize: 56,
	},
});

export {Notification};
