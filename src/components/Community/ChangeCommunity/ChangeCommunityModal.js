import {useCallback, useEffect, useMemo, useRef} from "react";
import {StyleSheet} from "react-native";
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetScrollView,
    useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Community from "./Community";
import {useQuery} from "react-query";
import {getMyCommunity} from "../../../utils/api/community";


export default function ChangeCommunityModal({isOpen, setIsOpen}) {
    const ref = useRef(null);
    const initialSnapPoints = useMemo(() => ["40%", "85%"], []);
    const {animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout} =
        useBottomSheetDynamicSnapPoints(initialSnapPoints);
    const {bottom} = useSafeAreaInsets();
    const current = 1;
    const {data} = useQuery("getMyCommunity", getMyCommunity);

    useEffect(() => {
        if (isOpen) {
            ref.current?.present();
        } else {
            ref.current?.dismiss();
        }
    }, [isOpen]);

    const hideChangeCommunityModal = () => setIsOpen(false);

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

    const handleDismiss = useCallback(() => {
        hideChangeCommunityModal();
    }, []);

    return (
        <BottomSheetModal
            ref={ref}
            index={0}
            snapPoints={animatedSnapPoints}
            handleHeight={animatedHandleHeight}
            contentHeight={animatedContentHeight}
            handleComponent={null}
            enableOverDrag={false}
            onDismiss={handleDismiss}
            backdropComponent={renderBackdrop}
        >
            <BottomSheetScrollView
                style={[styles.container, {paddingBottom: bottom ? bottom + 15 : 30}]}
                onLayout={handleContentLayout}
            >
                {data?.communityList.map((c, index) => (
                    <Community
                        key={index}
                        id={c.id}
                        name={c.name}
                        coverImage={c.coverImage}
                        current = {c.id === current}
                    />
                ))}
            </BottomSheetScrollView>
        </BottomSheetModal>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 14,
        borderTopLeftRadius: 14,
    },
});
