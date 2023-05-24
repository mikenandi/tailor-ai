import React from "react";
import {StyleSheet} from "react-native";
import {Body} from "./Typography";
import Color from "./Color";
import {useDispatch, useSelector} from "react-redux";
import {errorMsg} from "../Redux/Components/ErrorMsgSlice";
import {RootState} from "../Redux";

const ErrorMsg: React.FC = () => {
	const dispatch = useDispatch();

	const msg: string = useSelector((state: RootState) => {
		return state.errorMsg.error;
	});

	React.useEffect(() => {
		setTimeout(() => {
			dispatch(errorMsg(""));
		}, 5000);
	}, [msg]);

	return <>{!!msg && <Body style={styles.errorMsg}>{msg}</Body>}</>;
};

const styles = StyleSheet.create({
	errorMsg: {
		color: Color.error,
		marginTop: 6,
		width: "80%",
		backgroundColor: Color.lightred,
		padding: 10,
		borderRadius: 6,
	},
});

export {ErrorMsg};
