import React from "react";
import { StyleSheet, View, StatusBar, Image } from "react-native";
import { Body, HeadingS } from "../../Components/Typography";
import Color from "../../Components/Color";
import { ButtonL, OutlineButtonL } from "../../Components/Buttons";
import { useDispatch } from "react-redux";

function Welcome(props: any) {
    const dispatch = useDispatch();

    // Navigate to sign in screen
    const handleSignIn = (): void => {
        props.navigation.navigate("SignIn");
    };

    // Navigate to sign up screen
    const handleSignUp = (): void => {
        props.navigation.navigate("SignUp");
    };

    const handleSignInDriver = (): void => {
        props.navigation.navigate("SignInDriver");
    };

    return (
        <>
            <StatusBar backgroundColor={Color.primary} />

            <View style={styles.container}>
                <View style={styles.explanationContainer}>
                    <Image
                        source={require("../../../assets/img/fundi-1.png")}
                        style={styles.fundiImg}
                    />

                    <HeadingS style={styles.titleText}>
                        Welcome to fundi scan app
                    </HeadingS>

                    <Body style={styles.bodyText}>
                        Mobile app that enables tailors to get body measurements
                        without the hustle of doing manual measurements
                    </Body>
                </View>

                <ButtonL
                    action="Register"
                    onPress={handleSignUp}
                    style={styles.buttonAbsolute}
                />

                <OutlineButtonL
                    action="Sign in"
                    onPress={handleSignIn}
                    style={styles.buttonAbsolute1}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        backgroundColor: Color.white,
    },
    forgotPasswordContainer: {
        width: 260,
        alignItems: "flex-end",
    },
    bottomQuestionContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
    },
    questionText: {
        marginTop: 15,
        marginRight: 5,
    },
    bodyText: {
        color: Color.dimblack,
        fontWeight: "bold",
        marginTop: 10,
    },
    descText: {
        color: Color.white,
        // fontWeight: "bold",
        fontSize: 14,
        // backgroundColor: Color.lightblue,
        marginHorizontal: 20,
        textTransform: "uppercase",
    },
    buttonAbsolute: {
        position: "absolute",
        bottom: 240,
    },
    buttonAbsolute1: {
        position: "absolute",
        bottom: 160,
    },
    buttonAbsolute2: {
        position: "absolute",
        bottom: 80,
    },
    WelcomeContainer: {
        width: "100%",
        backgroundColor: Color.primary,
        // borderBottomEndRadius: 75,
        paddingBottom: 20,
        alignItems: "center",
        aspectRatio: 10 / 7.5,
        justifyContent: "center",
    },
    dot: {
        color: Color.warning,
        fontSize: 64,
    },
    titleText: {
        color: Color.black,
    },
    explanationContainer: {
        margin: 20,
    },
    fundiImg: {
        width: "90%",
        height: undefined,
        aspectRatio: 1 / 1,
    },
});

export default React.memo(Welcome);
