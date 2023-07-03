import { Camera, CameraCapturedPicture, CameraType } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
    customerDetailsVisibleReducer,
    scanCustomerVisibleReducer,
} from "../../Redux/Features/Customer/CustomerModalSlice";
import { useDispatch, useSelector } from "react-redux";
import { ModalNavBack } from "../../Components/ModalNavBack";
// import { ScanCustomer } from "./ScanCustomer";
import { RootState } from "../../Redux";
import * as MediaLibrary from "expo-media-library";
import { shareAsync } from "expo-sharing";
import { Image } from "react-native";
import Color from "../../Components/Color";
import { Button } from "react-native-paper";
// import { predictMeasurements } from "../../Api/Services/TailorAi/predict";
import axios from "axios";
import { savePredictions } from "../../Redux/Features/Customer/CustomerDetailsSlice";

export const ScanCamera: React.FC = () => {
    let camera: Camera;
    const dispatch = useDispatch();
    const [type, setType] = useState(CameraType.back);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] =
        useState<boolean>(false);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [photo, setPhoto] = useState<CameraCapturedPicture | undefined>();
    const cameraRef = useRef<Camera>(null);

    const customer = useSelector(
        (state: RootState) => state.customers.customer
    );

    const visible: boolean = useSelector((state: RootState) => {
        return state.scanCustomerModal.customerDetailsVisible;
    });

    const handleBack = (): void => {
        dispatch(scanCustomerVisibleReducer());
    };

    const predictMeasurements = async (height: number, photoUri: string) => {
        try {
            const imageFile = {
                uri: photoUri,
                name: "customer_image.jpg",
                type: "image/jpg",
            };

            const formData = new FormData();
            formData.append("file", imageFile);

            const response = await axios.post(
                `https://fast-tailor-production.up.railway.app/api/v1/predict-measurements?height=${height}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            return response.data;
        } catch (error: any) {
            return error.response.data;
        }
    };

    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }

    let takePic = async () => {
        let options = {
            quality: 1,
            base64: true,
            exif: false,
        };

        // let newPhoto: any = await cameraRef.current?.takePictureAsync(options);
        const newPhoto: any = await cameraRef.current?.takePictureAsync(
            options
        );

        setPhoto(newPhoto);
    };

    if (photo && "uri" in photo) {
        let sharePic = () => {
            shareAsync(photo?.uri).then(() => {
                setPhoto(undefined);
            });
        };

        const savePhoto = async () => {
            const mediaLibraryPermission =
                await MediaLibrary.requestPermissionsAsync();

            setHasMediaLibraryPermission(
                mediaLibraryPermission.status === "granted"
            );

            setIsLoading(true);

            let response = await predictMeasurements(
                Number(customer.height),
                photo.uri
            );

            dispatch(savePredictions({ ...response }));

            MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
                setPhoto(undefined);
            });

            dispatch(scanCustomerVisibleReducer());

            setIsLoading(false);
        };

        return (
            <View style={styles.container}>
                <Image
                    style={styles.preview}
                    source={{ uri: "data:image/jpg;base64," + photo.base64 }}
                />

                <View style={styles.imageBtnContainer}>
                    <Button
                        icon="delete"
                        mode="contained-tonal"
                        onPress={() => setPhoto(undefined)}
                    >
                        Discard
                    </Button>

                    <Button
                        icon="file"
                        mode="contained"
                        onPress={savePhoto}
                        loading={isLoading}
                    >
                        Done
                    </Button>
                </View>
            </View>
        );
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center" }}>
                    We need your permission to show the camera
                </Text>
                <Button onPress={requestPermission}>Grant permision</Button>
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
                <Camera
                    style={styles.camera}
                    type={type}
                    ratio="16:9"
                    ref={cameraRef}
                >
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={takePic}
                        >
                            <Text style={styles.text}>Take photo</Text>
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>

            {/* <Modal visible={visible} animationType="fade">
                <ScanCustomer />
            </Modal> */}
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
        width: 60,
        height: 60,
        borderRadius: 30,
        borderColor: Color.white,
        borderWidth: 3,
        justifyContent: "center",
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },
    buttonContainerB: {
        backgroundColor: "#fff",
        alignSelf: "flex-end",
    },
    preview: {
        alignSelf: "stretch",
        flex: 1,
    },
    imageBtnContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingBottom: 20,
        position: "absolute",
        bottom: 0,
        width: "100%",
    },
});
