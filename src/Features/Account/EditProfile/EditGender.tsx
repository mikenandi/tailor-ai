import React from "react";
import { StyleSheet, View, TouchableOpacity, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Color from "../../../Components/Color";
import { Body } from "../../../Components/Typography";
import { InputText } from "../../../Components/Inputs";
import { ModalNavDone } from "../../../Components/ModalNav";
import { editGenderVisibleReducer } from "../../../Redux/Features/Account/EditProfileModalSlice";
import { Fontisto } from "@expo/vector-icons";
import {
    femaleGenderReducer,
    maleGenderReducer,
} from "../../../Redux/Features/Account/ProfileDetailSlice";
// @ts-expect-error TS(2307): Cannot find module '../../../Api/Services/RentalFe... Remove this comment to see the full error message
import { updateGender } from "../../../Api/Services/RentalFeed/UserProfile";
import Loader from "../../../Components/Loader";

function EditGender(props: any) {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = React.useState(false);

    const gender = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.profileDetail.gender;
    });

    const { userId, authToken } = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.auth;
    });

    const handleBack = () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(editGenderVisibleReducer());
        return;
    };

    const handleMale = () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(maleGenderReducer());
        return;
    };

    const handleSave = async () => {
        try {
            setIsLoading(true);

            let data = {
                userId,
                authToken,
                gender,
            };

            let response = await updateGender(data);

            if (response.success) {
                setIsLoading(false);

                // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
                dispatch(editGenderVisibleReducer());

                return;
            }

            setIsLoading(false);

            return;
        } catch (error) {
            setIsLoading(false);
            console.log(error);

            return;
        }
    };

    const handleFemale = () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(femaleGenderReducer());
        return;
    };

    return (
        <>
            <ModalNavDone handleBack={handleBack} handleSave={handleSave} />
            <View style={styles.container}>
                <Body style={styles.titleText}>Choose gender</Body>
                <View style={styles.rowContainer}>
                    {/* male gender */}
                    <TouchableOpacity
                        activeOpacity={0.85}
                        onPress={handleMale}
                        style={{
                            ...styles.iconContainer,
                            borderColor:
                                gender === "male"
                                    ? Color.primary
                                    : Color.lightgray,
                        }}
                    >
                        <Fontisto
                            name="male"
                            size={60}
                            color={
                                gender === "male" ? Color.primary : Color.grey
                            }
                        />
                        <Body style={styles.labelText}>Male</Body>
                    </TouchableOpacity>

                    {/* female gender */}
                    <TouchableOpacity
                        activeOpacity={0.85}
                        onPress={handleFemale}
                        style={{
                            ...styles.iconContainer,
                            borderColor:
                                gender === "female"
                                    ? Color.primary
                                    : Color.lightgray,
                        }}
                    >
                        <Fontisto
                            name="female"
                            size={60}
                            color={
                                gender === "female" ? Color.primary : Color.grey
                            }
                        />
                        <Body style={styles.labelText}>Female</Body>
                    </TouchableOpacity>
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
        // alignItems: "center",
        marginHorizontal: 20,
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        marginTop: 20,
    },
    dot: {
        width: 12,
        aspectRatio: 1 / 1,
        borderRadius: 10,
        backgroundColor: Color.primary,
        // marginRight: 10,
        // padding: 15,
        // borderWidth: 1,
    },
    circle: {
        padding: 5,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        borderRadius: 20,
    },
    iconContainer: {
        alignItems: "center",
        backgroundColor: Color.lightgray,
        width: "45%",
        aspectRatio: 10 / 12,
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Color.primary,
    },
    titleText: {
        color: Color.dimblack,
        fontWeight: "bold",
    },
    labelText: {
        color: Color.dimblack,
        fontWeight: "bold",
        marginTop: 5,
    },
});

export { EditGender };
