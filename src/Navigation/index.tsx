import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Screen from "../Layouts/Screen";
import AppTabs from "./AppTabs";
import SignIn from "../Features/Auth/SignIn";
import SignUp from "../Features/Auth/SignUp";
import Welcome from "../Features/Auth/Welcome";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader";
import { logInReducer } from "../Redux/Features/Auth/AuthSlice";
import { useFonts } from "expo-font";
import * as Notifications from "expo-notifications";

const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

const Auth: React.FC = () => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    const [fontsLoaded] = useFonts({
        poppins: require("../../assets/fonts/barlow-condensed/BarlowCondensed-Medium.ttf"),
    });

    const isLogedOut = useSelector((state: any): boolean => {
        return state.auth.isLogedOut;
    });

    // Notifications
    // React.useEffect(() => {
    // 	(async () => {
    // 		try {
    // 			let token = await registerForPushNotificationsAsync();

    // 			return;
    // 		} catch (error) {
    // 			console.log(error);
    // 		}
    // 	})();
    // }, []);

    // Check auth
    React.useEffect(() => {
        (async () => {
            try {
                let savedToken = await SecureStore.getItemAsync("authToken");

                let savedUserId: any = await AsyncStorage.getItem("userId");

                if (!!savedToken) {
                    dispatch(
                        logInReducer({
                            authToken: savedToken,
                        })
                    );

                    setIsLoading(false);

                    return;
                }

                setIsLoading(false);

                return;
            } catch (error) {
                return;
            }
        })();

        return () => {
            // setIsLoading(false);
        };
    }, []);

    if (isLoading || !fontsLoaded) {
        return (
            <>
                <Loader />
            </>
        );
    }

    return (
        <Stack.Navigator initialRouteName="Welcome">
            {false ? (
                <>
                    <Stack.Screen
                        name="Welcome"
                        component={Welcome}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                        options={{
                            headerShown: false,
                        }}
                    />

                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                        options={{ headerShown: false }}
                    />
                </>
            ) : (
                <>
                    <Stack.Screen
                        name="AppTabs"
                        component={AppTabs}
                        options={{
                            headerShown: false,
                        }}
                    />
                </>
            )}
        </Stack.Navigator>
    );
};

export default Auth;
