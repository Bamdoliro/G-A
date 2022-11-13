import { Image, TouchableOpacity } from 'react-native';
import ViewMenuIcon from '../../../assets/viewMenuIcon.png';

export default function ViewMenu() { 
    return (
        <TouchableOpacity
            onPress={() => console.log('메뉴 보기 버튼 클릭됨')}
        >
            <Image
                source={ViewMenuIcon}
                style={{ width: 5, height: 22 }}
            />
        </TouchableOpacity>
    );
}