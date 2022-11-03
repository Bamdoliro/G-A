import { Image, TouchableOpacity } from 'react-native';
import arrowLeft from '../../assets/arrow.png';

export default function GoBackBtn() {
    return (
        <TouchableOpacity
            onPress={() => console.log('뒤로 가기 버튼 클릭됨')}
        >
            <Image 
                source={arrowLeft} 
                style={{ width: 29, height: 29 }} 
            />
        </TouchableOpacity>
    );
}