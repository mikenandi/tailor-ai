import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import {
    Button,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import {
    customerDetailsVisibleReducer,
    scanCustomerVisibleReducer,
} from "../../Redux/Features/Customer/CustomerModalSlice";
import { useDispatch, useSelector } from "react-redux";
import { ModalNavBack } from "../../Components/ModalNavBack";
import { ScanCustomer } from "./ScanCustomer";
import { RootState } from "../../Redux";

export const ScanCamera: React.FC = () => {
    const dispatch = useDispatch();
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] =
        Camera.useCameraPermissions();

    const visible: boolean = useSelector(
        (state: RootState) => {
            return state.scanCustomerModal
                .customerDetailsVisible;
        }
    );

    const handleBack = (): void => {
        dispatch(scanCustomerVisibleReducer());
    };

    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center" }}>
                    We need your permission to show the
                    camera
                </Text>
                <Button
                    onPress={requestPermission}
                    title="grant permission"
                />
            </View>
        );
    }

    function toggleCameraType(): void {
        // setType((current) =>
        //     current === CameraType.back
        //         ? CameraType.front
        //         : CameraType.back
        // );

        dispatch(customerDetailsVisibleReducer());
    }

    return (
        <>
            <View style={styles.container}>
                <ModalNavBack
                    title="Customer measurements"
                    handleBack={handleBack}
                />
                <Camera style={styles.camera} type={type}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={toggleCameraType}
                        >
                            <Text style={styles.text}>
                                Get measurements
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>

            <Modal visible={visible} animationType="fade">
                <ScanCustomer />
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "transparent",
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: "flex-end",
        alignItems: "center",
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },
});
