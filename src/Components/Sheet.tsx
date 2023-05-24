import React, { useCallback, useMemo, useRef } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TouchableWithoutFeedback,
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import Color from "./Color";
import { HeadingS } from "./Typography";
import { EvilIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

function Sheet(props: any) {
    const dispatch = useDispatch();
    // ref
    const bottomSheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ["25%", props.maxSnap], []);

    // callbacks
    const handleSheetChanges = useCallback((index: any) => {
        // console.log("handleSheetChanges", index);
    }, []);

    // renders
    return (
        <>
            {/* transparent background */}
            <TouchableWithoutFeedback onPress={props.handleClose}>
                <View style={styles.transparentContainer} />
            </TouchableWithoutFeedback>

            {/* Bottom sheet */}
            <BottomSheet
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                handleIndicatorStyle={styles.indicatorStyle}
            >
                <View style={styles.contentContainer}>
                    {/* sheet top */}
                    <View style={styles.titleContainer}>
                        <HeadingS style={styles.featuresText}>
                            {props.title}
                        </HeadingS>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={props.handleClose}
                        >
                            <EvilIcons
                                name="close"
                                size={24}
                                color={Color.dimblack}
                            />
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        contentContainerStyle={styles.scrollcontainer}
                        showsVerticalScrollIndicator={false}
                    >
                        {props.children}
                    </ScrollView>
                </View>
            </BottomSheet>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "grey",
    },
    contentContainer: {
        flex: 1,
        // marginHorizontal: 15,
        // alignItems: "center",
        // backgroundColor: Color.lightblue,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1.5,
        paddingHorizontal: 15,
        paddingBottom: 5,
        borderBottomColor: Color.lightgray,
    },
    featuresText: {
        // fontWeight: "bold",
    },
    indicatorStyle: {
        backgroundColor: Color.grey,
    },
    scrollcontainer: {
        paddingBottom: 50,
        paddingHorizontal: 10,
    },
    transparentContainer: {
        backgroundColor: Color.black,
        width: "100%",
        height: "100%",
        opacity: 0.4,
    },
});

export { Sheet };
