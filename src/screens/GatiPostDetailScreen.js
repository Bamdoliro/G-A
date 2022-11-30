import {ScrollView, StyleSheet, View} from 'react-native';
import SafeAreaView from '../components/common/SafeAreaView/SafeAreaView';
import DetailHeader from '../components/Feed/detail/DetailHeader';
import {useMutation, useQuery, useQueryClient} from "react-query";
import {getDdoDetail, joinDdo} from "../utils/api/ddo";
import GatiPostDetail from "../components/Feed/detail/GatiPostDetail";
import CustomButton from "../components/common/button/CustomButton/CustomButton";

const GatiPostDetailScreen = ({route, socket}) => {
    const queryClient = useQueryClient();
    const {id} = route.params;
    const {data} = useQuery('getDdoDetail', () => getDdoDetail(id), {
        onSuccess: () => {}
    })
    const {mutate} = useMutation(joinDdo, {
        onSuccess: () => {
            queryClient.invalidateQueries('getDdoDetail');
        }
    })

    const joinGati = () => {
        mutate(id);
        socket.current?.emit("room-join", {
            roomId: id
        })
    }

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView style={styles.contents}>
                <DetailHeader
                    data={data}
                />
                <GatiPostDetail
                    data={data}
                />
            </ScrollView>
            <View style={styles.buttonContainer}>
                <CustomButton
                    text="참여하기"
                    onPress={() => !data?.userJoin && joinGati()}
                    style={[styles.button, data?.userJoin ? {backgroundColor: "#d3d3d3" } : {}]}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {},
    contents: {},
    buttonContainer: {
        justifyContent: "flex-end",
        padding: 20,
        width: "100%",
        borderTopColor: "#D7D7D7",
        borderTopWidth: 0.6,
    },
    button: {
        width: "100%",
        height: 42,
        borderRadius: 6,
    }
})

export default GatiPostDetailScreen;
