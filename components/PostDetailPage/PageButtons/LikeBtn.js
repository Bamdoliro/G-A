import { Image, useState, TouchableOpacity } from 'react-native';
import heart from '../../../assets/heart.png';
import filledHeart from '../../../assets/heart-filled.png';

export default function LikeBtn() {
    
    const [LikeBtn, SetLikeBtn] = useState(true);

    return (
        <TouchableOpacity
            onPress={() => SetLikeBtn(cur => cur === true ? false : true)}
        >
            <Image
                source={LikeBtn === true ? heart : filledHeart}
                style={{ width: 26, height: 26 }}
            />
        </TouchableOpacity>
    )
}
