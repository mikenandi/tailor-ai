import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { InputText } from "../../../Components/Inputs";
import { ModalNavDone } from "../../../Components/ModalNav";
import { editEmailVisibleReducer } from "../../../Redux/Features/Account/EditProfileModalSlice";
import { editEmailReducer } from "../../../Redux/Features/Account/ProfileDetailSlice";

function EditEmail(props: any) {
    const dispatch = useDispatch();

    const handleBack = () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(editEmailVisibleReducer());
        return;
    };

    const email = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.profileDetail.email;
    });

    const handleEdit = (email: any) => {
        dispatch(editEmailReducer(email));
    };

    return (
        <>
            <ModalNavDone handleBack={handleBack} />
            <View style={styles.container}>
                <InputText
                    label="email"
                    value={email}
                    onChangeText={handleEdit}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
});

export { EditEmail };
