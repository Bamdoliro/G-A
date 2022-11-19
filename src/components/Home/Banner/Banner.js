import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import Banner1 from "../../../assets/banner/banner1.png";
import Banner2 from "../../../assets/banner/banner2.png";
import Banner3 from "../../../assets/banner/banner3.png";

import Swiper from 'react-native-swiper'

export default function Banner() {
    const images = [Banner1, Banner2, Banner3];

    return (
        <View style={styles.container}>
            <Swiper
                containerStyle={styles.wrapper}
                height={160}
                autoplay={true}
                paginationStyle={styles.paginationStyle}
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
            >
                {images.map((i, index) => (
                    <View key={index}
                          style={styles.slide}>
                        <Image source={i} style={styles.image}/>
                    </View>
                ))}
            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 160,
        justifyContent: "center",
    },
    slide: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 30,
    },
    image: {
        width: "100%",
        height: 140,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#F6F6F6",
    },
    paginationStyle: {
        bottom: 0,
    },
    dot: {
        backgroundColor: '#C4C4C4',
        width: 6,
        height: 6,
        borderRadius: "50%",
        margin: 4,
    },
    activeDot: {
        backgroundColor: '#0D76FF',
        width: 6,
        height: 6,
        borderRadius: "50%",
        margin: 4,
    }
})
