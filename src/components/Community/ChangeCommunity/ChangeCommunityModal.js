import {useCallback, useEffect, useMemo, useRef} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetView,
    useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import {useSafeAreaInsets} from "react-native-safe-area-context";


export default function ChangeCommunityModal({isOpen, setIsOpen}) {
    const ref = useRef(null);
    const initialSnapPoints = useMemo(() => ["CONTENT_HEIGHT"], []);
    const {animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout} =
        useBottomSheetDynamicSnapPoints(initialSnapPoints);
    const {bottom} = useSafeAreaInsets();

    useEffect(() => {
        if (isOpen) {
            ref.current?.present();
        } else {
            ref.current?.dismiss();
        }
    }, [isOpen]);

    const hideQuestionModal = () => setIsOpen(false);

    const renderBackdrop = useCallback(
        (props) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
                pressBehavior="none"
            />
        ),
        []
    );

    const confirm = () => {
        hideQuestionModal();
    };

    const handleDismiss = useCallback(() => {
        hideQuestionModal();
    }, []);

    return (
        <BottomSheetModal
            ref={ref}
            index={0}
            snapPoints={animatedSnapPoints}
            handleHeight={animatedHandleHeight}
            contentHeight={animatedContentHeight}
            handleComponent={null}
            // enableOverDrag={false}
            // enablePanDownToClose={true}
            onDismiss={handleDismiss}
            backdropComponent={renderBackdrop}
        >
            <BottomSheetView
                style={[styles.container, { paddingBottom: bottom ? bottom + 15 : 30 }]}
                onLayout={handleContentLayout}
            >
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => {
                        hideQuestionModal();
                    }}
                >
                </TouchableOpacity>
                <View style={styles.header}>
                    <View style={styles.titleContainer}>
                        <Text>내욘ㅇ내용</Text>
                    </View>
                </View>
            </BottomSheetView>
        </BottomSheetModal>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 14,
        borderTopLeftRadius: 14,
    },
    header: {
        marginTop: 30,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "flex-end",
    },
    titleContainer: {
        marginLeft: 8,
    },
    title: {
        fontSize: 20,
    },
    textInput: {
        marginHorizontal: 20,
        height: 160,
        backgroundColor: "#f4f4f4",
        marginVertical: 14,
        borderRadius: 6,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
        textAlignVertical: "top",
        fontSize: 20,
    },
    confirmButton: {
        marginTop: 30,
        marginHorizontal: 20,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ED6663",
        paddingVertical: 14,
        paddingHorizontal: 20,
        height: 80,
    },
    confirmButtonText: {
        fontSize: 20,
        color: "white",
    },
    disabledConfirmButton: {
        backgroundColor: "#CFD2CF",
    },
    closeButton: {
        position: "absolute",
        top: 20,
        right: 18,
        zIndex: 100,
    },
    image: {
        width: 49,
        height: 49,
    },
});
