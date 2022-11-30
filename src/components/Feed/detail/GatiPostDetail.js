import {StyleSheet, Text, View} from "react-native";
import Tag from "../GatiPostList/Tag";
import {changeToPeriod} from "../../../utils/etc/dateTimeFormatter";
import CapacityBar from "./CapacityBar";

export default function GatiPostDetail({data}) {

    return (
        <View style={styles.container}>
            {
                // <Image
                //     source={img}
                //     style={styles.img}
                // />
            }
            <Text style={styles.title}>{data?.title}</Text>
            <View style={styles.tags}>
                <Tag text={`${data?.capacity}명`}/>
                <Tag text={changeToPeriod(data?.startDate, data?.endDate)}/>
            </View>
            <Text style={styles.explanation}>
                {data?.content}
            </Text>
            <CapacityBar
                capacity={data?.capacity}
                numberOfJoiner={data?.numberOfJoiner}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: "#fff"
    },
    img: {
        width: "100%",
        borderRadius: 4,
        height: 220,
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        color: "#00000",
    },
    explanation: {
        fontSize: 15,
        color: "#636363",
        marginBottom: 30,
    },
    tags: {
        flexDirection: "row",
        marginVertical: 15,
    },
})
