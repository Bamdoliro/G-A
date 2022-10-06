import react from 'react';
import { ScrollView, Image, Text, View, Dimensions, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { Component } from 'react/cjs/react.production.min';
import GatiLogoWhite from "../../../assets/gatiLogo_White.png";
import SliderBackground from "../../../assets/sliderBackground.png";

class MainBanner extends Component {
    render () {
        this.state = {
            images: [
                SliderBackground,
                SliderBackground,
                SliderBackground
            ],
            text: [
                '지금 뜨고 있는 Gati를 확인 해 보세요!',
                '자이 강아지산책 모임',
                '매주 목요일 흰빨래 세탁'
            ],
            currentIndex: 0
        };
        return (
            <View style={styles.container}>
                <Text style={titleText}>{this.state.text[this.state.currentIndex]}</Text> 
                <Image source={GatiLogoWhite} style={logoImage}/>
                <SliderBox 
                  images={this.state.images} 
                  title={this.state.text}
                  style={styles.bannerContent}
                  currentImageEmitter={ i => this.setState({currentIndex: i}) }
                  autoplay
                  circleLoop
                />
            </View>
        );
    }
}

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height / 10 * 2;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    bannerContent: {
        flex: 1,
        width: screenWidth,
        height: screenHeight,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    titleText: {
        fontSize : 20,
        paddingHorizontal: 20,
        paddingBottom: 5,
        color: 'white',
        textAlign: 'center'
    },
    logoImage: {
        width: 60,
        height: 62,
        alignSelf: 'flex-end'
    }
});