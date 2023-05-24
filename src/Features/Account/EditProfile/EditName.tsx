import React from "react";
import { StyleSheet, View, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { InputText } from "../../../Components/Inputs";
import { ModalNavDone } from "../../../Components/ModalNav";
import { editNameVisibleReducer } from "../../../Redux/Features/Account/EditProfileModalSlice";
import { editNameReducer } from "../../../Redux/Features/Account/ProfileDetailSlice";
// @ts-expect-error TS(2307): Cannot find module '../../../Api/Services/RentalFe... Remove this comment to see the full error message
import { updateProfileName } from "../../../Api/Services/RentalFeed/UserProfile";
import Loader, { Loading } from "../../../Components/Loader";

function EditName(props: any) {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = React.useState(false);

    const handleBack = () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(editNameVisibleReducer());
        return;
    };

    const { userId, authToken } = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.auth;
    });

    const name = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.profileDetail.name;
    });

    const handleEdit = (name: any) => {
        dispatch(editNameReducer(name));
        return;
    };

    const handleSave = async () => {
        try {
            setIsLoading(true);

            let nameArray = name.split(" ", 2);
            const data = {
                userId,
                authToken,
                firstname: nameArray[0],
                lastname: nameArray[1],
            };

            let response = await updateProfileName(data);

            if (response.success) {
                setIsLoading(false);

                // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
                dispatch(editNameVisibleReducer());

                return;
            }

            return;
        } catch (error) {
            // @ts-expect-error TS(2571): Object is of type 'unknown'.
            console.log(error.response);
            return;
        }
    };

    return (
        <>
            <ModalNavDone
                title=""
                handleBack={handleBack}
                handleSave={handleSave}
            />
            <View style={styles.container}>
                <View>
                    <InputText
                        label="fullname"
                        placeholder="Firstname Lastname"
                        value={name}
                        onChangeText={handleEdit}
                    />
                </View>
            </View>

            <Modal visible={isLoading} transparent={false} animationType="fade">
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

export { EditName };
