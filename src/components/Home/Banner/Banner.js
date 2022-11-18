import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

function sliderTouch(index) {
    alert(index);
}

export default function Banner() {
    return(
        <View style={styles.MainBannerContainer}>
            <SliderBox
                images={[
                    require("../../../assets/sliderBackground.png"),
                    require("../../../assets/sliderBackground.png"),
                    require("../../../assets/sliderBackground.png"),
                ]}
                dotColor="#fff"
                onCurrentImagePressed = {
                    index => {
                        console.log('image pressed index : ' + index);
                        sliderTouch(index);
                    }
                }
                sliderBoxHeight={130}
                dotStyle = {{
                    width: 13,
                    height: 13,
                    borderRadius: 15,
                    marginHorizontal: 4,
                }}
                ImageComponentStyle={{borderRadius: 18, width: '98%', marginTop: 5}}
                autoplay
                autoplayInterval={15000}
                circleLoop
            />
        </View>
    );
}

const styles = StyleSheet.create({
    MainBannerContainer: {
        marginBottom: 30
    }
})
