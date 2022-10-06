import React from 'react';
import { View, Image } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

function sliderTouch(index) {
    alert(index);
}

function MainBanner() {
    return(
        <View>
            <SliderBox
                images={[
                    require("../../../assets/sliderBackground.png"),
                    require("../../../assets/sliderBackground.png"),
                    require("../../../assets/sliderBackground.png"),
                ]}
                onCurrentImagePressed = {
                    index => {
                        console.log('image pressed index : ' + index);
                        sliderTouch(index);
                    }
                }
                // autoplay
                // circleLoop
            />
        </View>
    );
}

export default MainBanner;

// let screenWidth = Dimensions.get('window').width;
// let screenHeight = Dimensions.get('window').height / 10 * 2;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       flexDirection: 'row',
//     },
//     bannerContent: {
//         flex: 1,
//         width: screenWidth,
//         height: screenHeight,
//         justifyContent: 'center',
//         alignItems: 'flex-start'
//     },
//     titleText: {
//         fontSize : 20,
//         paddingHorizontal: 20,
//         paddingBottom: 5,
//         color: 'white',
//         textAlign: 'center'
//     },
//     logoImage: {
//         width: 60,
//         height: 62,
//         alignSelf: 'flex-end'
//     }
// });