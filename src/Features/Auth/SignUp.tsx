import React from "react";
import { StyleSheet, View } from "react-native";
import {
    Body,
    HeadingS,
} from "../../Components/Typography";
import AuthScreen from "../../Layouts/AuthScreen";
import {
    ButtonL,
    TextButton,
} from "../../Components/Buttons";
import { useDispatch } from "react-redux";
import {
    cleanAuthReducer,
    emailReducer,
    logInReducer,
    nameReducer,
    passwordReducer,
    testlogin,
} from "../../Redux/Features/Auth/AuthSlice";
import { ErrorMsg } from "../../Components/ErrorMsg";
import { useSelector } from "react-redux";
import { NavigationProp } from "@react-navigation/native";
import { RootState } from "../../Redux";
import { signup } from "../../Api/Auth/Auth";
import { errorMsg } from "../../Redux/Components/ErrorMsgSlice";
import { isEmail } from "../../Helpers/EmailCheck";
import Loader from "../../Components/Loader";
import * as SecureStore from "expo-secure-store";
import { TextInput } from "@react-native-material/core";
import Color from "../../Components/Color";
import { Ionicons } from "@expo/vector-icons";

type SignUpProps = {
    navigation: NavigationProp<any>;
};

interface ISignup {
    name: string;
    email: string;
    password: string;
}

const SignUp: React.FC<SignUpProps> = (props) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] =
        React.useState<boolean>(false);
    const [passwordVisible, setPasswordVisible] =
        React.useState<boolean>(true);

    const { name, email, password }: ISignup = useSelector(
        (state: RootState) => {
            return state.auth;
        }
    );

    const handleSignIn = (): void => {
        props.navigation.navigate("SignIn");
    };

    const handlePassword = (password: string): void => {
        dispatch(passwordReducer(password));
    };

    const handleName = (name: string): void => {
        dispatch(nameReducer(name));
    };

    const handleEmail = (email: string): void => {
        dispatch(emailReducer(email));
    };

    const handlePasswordVisible = (): void => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSignup = async () => {
        try {
            if (!name || !email || !password) {
                dispatch(errorMsg("fill all fields"));

                return;
            }

            if (!isEmail(email)) {
                dispatch(errorMsg("Invalid email address"));

                return;
            }

            if (password.length < 6) {
                dispatch(
                    errorMsg(
                        "password should have at least 6 charracters"
                    )
                );

                return;
            }

            setIsLoading(true);

            let response: { access_token: string } =
                await signup({
                    name,
                    email,
                    password,
                });

            if (response.access_token) {
                await SecureStore.setItemAsync(
                    "authToken",
                    response.access_token
                );

                dispatch(
                    logInReducer({
                        authToken: response.access_token,
                    })
                );

                dispatch(cleanAuthReducer());

                return;
            }

            setIsLoading(false);

            return;
        } catch (error) {
            console.log(error);
        }
    };

    if (isLoading) {
        return (
            <>
                <Loader />
            </>
        );
    }

    return (
        <>
            <AuthScreen>
                <HeadingS>Create account</HeadingS>

                <ErrorMsg />

                <TextInput
                    label="Name"
                    style={styles.textInput}
                    color={Color.primary}
                    variant="standard"
                    onChangeText={handleName}
                    value={name}
                />

                <TextInput
                    label="Email"
                    style={styles.textInput}
                    color={Color.primary}
                    variant="standard"
                    onChangeText={handleEmail}
                    value={email}
                />

                <TextInput
                    label="Password"
                    style={styles.textInput}
                    variant="standard"
                    color={Color.primary}
                    onChangeText={handlePassword}
                    value={password}
                    secureTextEntry={passwordVisible}
                    trailing={(props) =>
                        passwordVisible ? (
                            <Ionicons
                                name="eye-outline"
                                size={24}
                                color="black"
                                onPress={
                                    handlePasswordVisible
                                }
                            />
                        ) : (
                            <Ionicons
                                name="eye-off-outline"
                                size={24}
                                color="black"
                                onPress={
                                    handlePasswordVisible
                                }
                            />
                        )
                    }
                />

                <ButtonL
                    action="sign up"
                    onPress={handleSignup}
                />

                <View
                    style={styles.bottomQuestionContainer}
                >
                    <Body style={styles.questionText}>
                        Have account?
                    </Body>
                    <TextButton
                        action="sign in"
                        onPress={handleSignIn}
                    />
                </View>
            </AuthScreen>
        </>
    );
};

const styles = StyleSheet.create({
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
    textInput: {
        width: "80%",
        marginTop: 30,
    },
});

export default React.memo(SignUp);
