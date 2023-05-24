import React from "react";
import { StyleSheet, View, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";
// @ts-expect-error TS(2307): Cannot find module '../../../Api/Services/RentalFe... Remove this comment to see the full error message
import { updateBirthdate } from "../../../Api/Services/RentalFeed/UserProfile";
import { InputDate } from "../../../Components/InputDate";
import Loader from "../../../Components/Loader";
import { ModalNavDone } from "../../../Components/ModalNav";
import { editBirthdateVisibleReducer } from "../../../Redux/Features/Account/EditProfileModalSlice";
import { saveBirthdateReducer } from "../../../Redux/Features/Account/ProfileDetailSlice";

function EditBirthdate(props: any) {
    const dispatch = useDispatch();

    const handleBack = () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(editBirthdateVisibleReducer());
        return;
    };

    const [isLoading, setIsLoading] = React.useState(false);

    const [birthdate, setBirthDate] = React.useState({
        date: "",
        month: "",
        year: "",
    });

    const handleDate = (date: any) => {
        if (Number(date) <= 31) {
            setBirthDate({ ...birthdate, date: date });
            return;
        }
    };

    const handleMonth = (month: any) => {
        if (Number(month) <= 12) {
            setBirthDate({ ...birthdate, month: month });
            return;
        }
    };

    const handleYear = (year: any) => {
        setBirthDate({ ...birthdate, year: year });

        return;
    };

    const { userId, authToken } = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.auth;
    });

    const handleSave = async () => {
        try {
            if (!birthdate.date || !birthdate.year || !birthdate.month) {
                return;
            }

            setIsLoading(true);

            let birthdateData = `${birthdate.date.padStart(
                2,
                "0"
            )}-${birthdate.month.padStart(2, "0")}-${birthdate.year}`;

            let data = { userId, authToken, birthdate: birthdateData };

            let response = await updateBirthdate(data);

            if (response.success) {
                setIsLoading(false);

                dispatch(saveBirthdateReducer(birthdateData));

                // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
                dispatch(editBirthdateVisibleReducer());

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
                <InputDate
                    date={birthdate.date}
                    month={birthdate.month}
                    year={birthdate.year}
                    handleDate={handleDate}
                    handleMonth={handleMonth}
                    handleYear={handleYear}
                />
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

export { EditBirthdate };
