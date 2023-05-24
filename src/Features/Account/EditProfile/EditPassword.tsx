import React from "react";
import { StyleSheet, View, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";
// @ts-expect-error TS(2307): Cannot find module '../../../Api/Services/RentalFe... Remove this comment to see the full error message
import { updatePassword } from "../../../Api/Services/RentalFeed/UserProfile";
import { ErrorMsg } from "../../../Components/ErrorMsg";
import { InputPassword } from "../../../Components/Inputs";
import Loader from "../../../Components/Loader";
import { ModalNavDone } from "../../../Components/ModalNav";
import { errorMsg } from "../../../Redux/Components/ErrorMsgSlice";
import { editPasswordVisibleReducer } from "../../../Redux/Features/Account/EditProfileModalSlice";

function EditPassword(props: any) {
    const dispatch = useDispatch();

    const [oldPassword, setOldPassword] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    const handleBack = () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(editPasswordVisibleReducer());
        return;
    };

    const handleConfirmNewPassword = (password: any) => {
        setNewPassword(password);

        return;
    };

    const handleNewPassword = (password: any) => {
        setOldPassword(password);

        return;
    };

    const { userId, authToken } = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.auth;
    });

    const handleSave = async () => {
        try {
            if (!oldPassword || !newPassword) {
                dispatch(errorMsg("Enter both passwords"));

                return;
            }

            setIsLoading(true);
            let data = { userId, authToken, oldPassword, newPassword };

            let response = await updatePassword(data);

            if (response.success) {
                setIsLoading(false);
                // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
                dispatch(editPasswordVisibleReducer());

                return;
            }

            // @ts-expect-error TS(2304): Cannot find name 'code'.
            if (!response.success && code === "incorrect") {
                setIsLoading(false);

                dispatch(errorMsg(response.message));
                return;
            }

            setIsLoading(false);

            return;
        } catch (error) {
            console.log(error);

            return;
        }
    };

    return (
        <>
            <ModalNavDone handleBack={handleBack} handleSave={handleSave} />
            <View style={styles.container}>
                <ErrorMsg />

                <InputPassword
                    label="Old password"
                    value={oldPassword}
                    onChangeText={handleNewPassword}
                />

                <InputPassword
                    label="New password"
                    value={newPassword}
                    onChangeText={handleConfirmNewPassword}
                />
            </View>

            <Modal visible={isLoading} animationType="fade">
                <Loader />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
});

export { EditPassword };
