import { Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import heart from '../../../assets/heart.png';
import filledHeart from '../../../assets/heart-filled.png';

export default function LikeBtn() {
    
    const [LikeBtn, setLikeBtn] = useState(true);

    return (
        <TouchableOpacity
            onPress={() => setLikeBtn(cur => cur === true ? false : true)}
        >
            <Image
                source={LikeBtn === true ? heart : filledHeart}
                style={{ width: 26, height: 26 }}
            />
        </TouchableOpacity>
    )
}
