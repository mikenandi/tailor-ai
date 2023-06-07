import React from "react";
import { StyleSheet, Modal, View, ScrollView } from "react-native";
import Screen from "../../Layouts/Screen";
import Color from "../../Components/Color";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
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
import { Customer } from "./Customer";
import { ICustomer } from "../../Redux/Features/Customer/CustomerDetailsSlice";

const Home: React.FC = () => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const { authToken, name } = useSelector((state: RootState) => {
        return state.auth;
    });

    const fetchProfile = async (authToken: string) => {
        let response = await getUserProfile(authToken);

        if (response.statusCode === 401) {
            dispatch(logOutReducer());

            return;
        }

        let { name, email, phoneNumber } = response;

        dispatch(userProfileReducer({ name, email, phoneNumber }));

        return;
    };

    const visible: boolean = useSelector((state: RootState) => {
        return state.scanCustomerModal.scanCustomerVisible;
    });

    const handleScanVisible = (): void => {
        dispatch(scanCustomerVisibleReducer());
    };

    const customers = useSelector((state: RootState) => {
        return state.customers.customers;
    });

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
                    <ScrollView
                        contentContainerStyle={styles.contentContainer}
                        showsVerticalScrollIndicator={false}
                    >
                        {customers.map((customer: ICustomer, index: number) => (
                            <Customer
                                name={customer.name}
                                chest={customer.chest}
                                waist={customer.waist}
                                hips={customer.hips}
                                shoulder={customer.shoulder}
                                neck={customer.neck}
                                arm={customer.arm}
                                bicep={customer.bicep}
                                mobile={customer.mobile}
                                gender={customer.gender}
                                key={index}
                                index={index}
                            />
                        ))}
                    </ScrollView>
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
        // width: "100%"
        paddingBottom: 40,
    },
    detailContainer: {
        // flexDirection: "row",
        marginHorizontal: 0,
        // backgroundColor: Color.lightgray,
        borderRadius: 10,
        padding: 10,
    },
    name: {
        // fontWeight: "bold",
        borderBottomWidth: 2,
        paddingBottom: 2,
        borderBottomColor: Color.primary,
        marginBottom: 8,
    },
    iconStyle: {
        marginRight: 10,
    },
    detailText: {
        // fontSize: 18,
    },
    dataContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 6,
    },
    detail: {
        fontWeight: "bold",
    },
});

export default Home;
