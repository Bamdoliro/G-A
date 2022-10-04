import {ScrollView, Image, Text, View, Dimensions, StyleSheet} from 'react-native';
import GatiLogoWhite from "../../../assets/gatiLogo_White.png";

export default function MainBanner() {
      return (
          <ScrollView
              pagingEnabled={true}
              horizontal={true}
              showsHorizontalScrollIndicator = {true}
              style={styles.container}
          >
              <View style={styles.bannerContent1}>
                  <Text style={styles.titleText}>
                      지금 뜨고 있는
                  </Text>
                  <Text style={styles.titleText}>
                      Gati를 확인해 보세요!
                  </Text>
                  <Image source={GatiLogoWhite} style={logoImage}/>
              </View>
              <View style={styles.bannerContent2}>
                  <Text style={styles.titleText}>
                      자이 강아지 산책 모임
                  </Text>
              </View>
              <View style={styles.bannerContent3}>
                  <Text style={styles.titleText}>
                      매주 목요일 흰빨래 세탁
                  </Text>
              </View>
          </ScrollView>
      );
}

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height / 10 * 2;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    bannerContent1: {
        backgroundColor: "#170055",
        flex: 1,
        width: screenWidth,
        height: screenHeight,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    bannerContent2: {
        backgroundColor: "#3E00FF",
        flex: 1,
        width: screenWidth,
        height: screenHeight,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    bannerContent3: {
        backgroundColor: "#AE00FB",
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