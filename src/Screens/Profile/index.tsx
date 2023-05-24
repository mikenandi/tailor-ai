import React from "react";
import {
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity,
    Modal,
} from "react-native";
import Screen from "../../Layouts/Screen";
import { useDispatch, useSelector } from "react-redux";
import { Body, HeadingS } from "../../Components/Typography";
import {
    MaterialCommunityIcons,
    Entypo,
    Ionicons,
    Feather,
    AntDesign,
} from "@expo/vector-icons";
import Color from "../../Components/Color";
import { ProfileDetail } from "./ProfileDetail";
import Topbar from "../../Layouts/Topbar";
import { RootState } from "../../Redux";
import { LogoutModal } from "../../Features/Logout";
import { logoutVisibleReducer } from "../../Redux/Features/Logout/LogoutModalSlice";
import { EditProfile } from "./EditProfile";
import {
    privacyProfileVisibleReducer,
    updateProfileVisibleReducer,
} from "../../Redux/Features/Profile/ProfileModal";
import { Privacy } from "./Privacy";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = (props) => {
    const dispatch = useDispatch();

    const updateVisible: boolean = useSelector((state: RootState) => {
        return state.profileModal.updateProfileVisible;
    });

    const privacyVisible: boolean = useSelector((state: RootState) => {
        return state.profileModal.privacyProfileVisible;
    });

    const { name, email } = useSelector((state: RootState) => {
        return state.auth;
    });

    const handleEdit = (): void => {
        dispatch(updateProfileVisibleReducer());
    };

    const handlePrivacy = (): void => {
        dispatch(privacyProfileVisibleReducer());
    };

    const visible: boolean = useSelector((state: RootState) => {
        return state.logoutModal.logoutVisible;
    });

    const handleLogout = async () => {
        dispatch(logoutVisibleReducer());

        return;
    };

    return (
        <>
            <Screen>
                <Topbar title="Profile" />
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {/* Plate number */}

                    <View style={styles.container}>
                        <View style={styles.plateNumberContainer}>
                            <View style={styles.carAvatar}>
                                <Ionicons
                                    name="person"
                                    size={80}
                                    color={Color.grey}
                                />
                            </View>
                            <View style={styles.plate}>
                                <HeadingS style={styles.titleText}>
                                    Michael Nandi
                                </HeadingS>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={handleEdit}
                                style={styles.abInfo}
                            >
                                <View>
                                    <AntDesign
                                        name="edit"
                                        size={24}
                                        color={Color.primary}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <ProfileDetail label="Name" value={"Michael Nandi"}>
                            <Ionicons
                                name="person-outline"
                                size={30}
                                color={Color.primary}
                            />
                        </ProfileDetail>

                        <ProfileDetail
                            label="Email"
                            value={"michalnandi05@gmail.com"}
                        >
                            <MaterialCommunityIcons
                                name="email-outline"
                                size={30}
                                color={Color.primary}
                            />
                        </ProfileDetail>

                        <ProfileDetail label="Mobile" value={"0748233434"}>
                            <MaterialCommunityIcons
                                name="phone-outline"
                                size={30}
                                color={Color.primary}
                            />
                        </ProfileDetail>

                        <TouchableOpacity
                            activeOpacity={0.85}
                            onPress={handlePrivacy}
                        >
                            <ProfileDetail
                                label="Privacy"
                                value="Password & account"
                            >
                                <Feather
                                    name="settings"
                                    size={24}
                                    color={Color.primary}
                                />
                            </ProfileDetail>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={handleLogout}
                            activeOpacity={0.9}
                        >
                            <View style={styles.logoutContainer}>
                                <Entypo
                                    name="log-out"
                                    size={24}
                                    color={Color.error}
                                />
                                <Body style={styles.logoutText}>Log out</Body>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Screen>

            <Modal visible={visible} animationType="fade" transparent>
                <LogoutModal />
            </Modal>

            <Modal visible={updateVisible} animationType="fade">
                <EditProfile />
            </Modal>

            <Modal visible={privacyVisible} animationType="fade">
                <Privacy />
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingBottom: 40,
        // paddingTop: 20,
    },
    container: {
        // flex: 1,
    },
    carAvatar: {
        backgroundColor: Color.lightgray,
        width: 140,
        aspectRatio: 10 / 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 70,
    },
    plateNumberContainer: {
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: Color.lightgray,
        paddingBottom: 20,
        // borderRadius: 10,
        backgroundColor: Color.primary,
    },
    plate: {
        padding: 8,
        paddingHorizontal: 10,
        marginLeft: 15,
        borderRadius: 2,
    },
    abInfo: {
        width: 60,
        aspectRatio: 10 / 10,
        backgroundColor: Color.lightblue,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        position: "absolute",
        right: 20,
        bottom: -20,
    },
    logoutContainer: {
        paddingHorizontal: 30,
        borderTopWidth: 6,
        borderTopColor: Color.lightgray,
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
    },
    logoutText: {
        fontWeight: "bold",
        marginLeft: 10,
    },
    editText: {
        color: Color.white,
        fontWeight: "bold",
    },
    titleText: {
        fontWeight: "bold",
        color: Color.white,
    },
});

export default Profile;
