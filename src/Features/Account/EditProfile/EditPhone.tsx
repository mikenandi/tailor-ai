import React from "react";
import { StyleSheet, View, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ModalNavDone } from "../../../Components/ModalNav";
import { editPhoneVisibleReducer } from "../../../Redux/Features/Account/EditProfileModalSlice";
import { InputMobileNumber } from "../../../Components/InputMobileNumber";
import { editPhoneNumberReducer } from "../../../Redux/Features/Account/ProfileDetailSlice";
// @ts-expect-error TS(2307): Cannot find module '../../../Api/Services/RentalFe... Remove this comment to see the full error message
import { updatePhoneNumber } from "../../../Api/Services/RentalFeed/UserProfile";
import Loader from "../../../Components/Loader";
import { errorMsg } from "../../../Redux/Components/ErrorMsgSlice";
import { ErrorMsg } from "../../../Components/ErrorMsg";

function EditPhone(props: any) {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = React.useState(false);

    const handleBack = () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(editPhoneVisibleReducer());
        return;
    };

    const phone = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.profileDetail.phone;
    });

    const countryCode = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.profileDetail.countryCode;
    });

    const handleEdit = (phone: any) => {
        dispatch(editPhoneNumberReducer(phone));
        return;
    };

    const { userId, authToken } = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.auth;
    });

    const handleSave = async () => {
        try {
            if (phone.length < 11) {
                dispatch(errorMsg("Invalid number"));

                return;
            }
            setIsLoading(true);

            let phoneNumber = phone.replace(/\s/gi, "");
            let data = { userId, authToken, phoneNumber };

            let response = await updatePhoneNumber(data);

            if (response.success) {
                setIsLoading(false);

                // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
                dispatch(editPhoneVisibleReducer());

                return;
            }

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

                <InputMobileNumber
                    value={phone}
                    countryCode={countryCode}
                    onChangeText={handleEdit}
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
        paddingTop: 20,
    },
});

export { EditPhone };
