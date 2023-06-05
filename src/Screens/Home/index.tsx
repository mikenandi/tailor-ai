import React from "react";
import { StyleSheet, Modal, View } from "react-native";
import Screen from "../../Layouts/Screen";
import Color from "../../Components/Color";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { FAB } from "../../Components/FAB";
import Topbar from "../../Layouts/Topbar";
import { RootState } from "../../Redux";
import * as SecureStorage from "expo-secure-store";
import {
    logOutReducer,
    userProfileReducer,
} from "../../Redux/Features/Auth/AuthSlice";
import { scanCustomerVisibleReducer } from "../../Redux/Features/Customer/CustomerModalSlice";
import { ScanCamera } from "./ScanCamera";
import { Body, HeadingS } from "../../Components/Typography";
import { getUserProfile } from "../../Api/Services/Backend/Profile";

const Home: React.FC = () => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const { authToken, name } = useSelector((state: RootState) => {
        return state.auth;
    });

    const fetchProfile = async (authToken: string) => {
        let { name, email, phoneNumber } = await getUserProfile(authToken);

        dispatch(userProfileReducer({ name, email, phoneNumber }));

        return;
    };

    const visible: boolean = useSelector((state: RootState) => {
        return state.scanCustomerModal.scanCustomerVisible;
    });

    const handleScanVisible = (): void => {
        dispatch(scanCustomerVisibleReducer());
    };

    const displayGreeting = (): string => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();

        let greeting;

        if (currentHour < 12) {
            greeting = "Good morning";
        } else if (currentHour < 18) {
            greeting = "Good afternoon";
        } else {
            greeting = "Good evening";
        }

        return greeting;
    };

    // Call the function to display the greeting
    displayGreeting();

    const getFirstname = (name: string): string | undefined => {
        return name.trim().split(" ")[0];
    };

    const handleLogout = async (): Promise<void> => {
        await SecureStorage.deleteItemAsync("authToken");

        dispatch(logOutReducer());
    };

    React.useEffect(() => {
        fetchProfile(authToken);
    }, []);

    // if (isLoading) {
    // 	return (
    // 		<>
    // 			<Loader />
    // 		</>
    // 	);
    // }

    return (
        <>
            <Screen>
                <Topbar
                    title={`${displayGreeting()} , ${getFirstname(name)}`}
                />

                <View style={styles.container}>
                    <View style={styles.detailContainer}>
                        <Ionicons
                            name="md-body-outline"
                            size={36}
                            color={Color.primary}
                            style={styles.iconStyle}
                        />
                        <View>
                            <HeadingS style={styles.name}>
                                Mussa Selemani
                            </HeadingS>

                            <Body style={styles.detailText}>
                                Chest : 12 INCH
                            </Body>
                            <Body style={styles.detailText}>
                                Waist : 12 INCH
                            </Body>
                            <Body style={styles.detailText}>
                                Hips : 12 INCH
                            </Body>
                            <Body style={styles.detailText}>
                                Shoulder : 12 INCH
                            </Body>
                            <Body style={styles.detailText}>
                                Neck : 12 INCH
                            </Body>
                            <Body style={styles.detailText}>
                                Arm length : 12 INCH
                            </Body>
                            <Body style={styles.detailText}>
                                Bicep : 12 INCH
                            </Body>
                        </View>
                    </View>
                </View>

                <FAB onPress={handleScanVisible}>
                    <AntDesign name="scan1" size={30} color="black" />
                </FAB>
            </Screen>

            <Modal visible={visible} animationType="fade">
                {/* <ScanCustomer /> */}
                <ScanCamera />
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        marginTop: 20,
        marginHorizontal: 15,
    },
    scrollContainer: {
        paddingBottom: 70,
    },
    fab: {
        backgroundColor: Color.lightblue,
    },
    startPostingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    emptyImg: {
        width: 240,
        height: undefined,
        aspectRatio: 10 / 10,
    },
    notifyContainer: {
        backgroundColor: Color.white,
        top: 20,
        borderRadius: 100,
    },
    emptyContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    msgText: {
        color: Color.dimblack,
        fontWeight: "bold",
    },
    contentContainer: {
        width: "100%",
    },
    detailContainer: {
        flexDirection: "row",
        marginHorizontal: 0,
        backgroundColor: Color.lightgray,
        borderRadius: 10,
        padding: 10,
    },
    name: {
        fontWeight: "bold",
    },
    iconStyle: {
        marginRight: 10,
    },
    detailText: {
        fontSize: 18,
    },
});

export default Home;
