import { Image, TouchableOpacity } from 'react-native';
import CommentBtn from '../../assets/comment.png';

export default function CommentBtn() {
    return (
        <TouchableOpacity
            onPress={() => console.log('댓글 버튼 클릭됨')}
        >
            <Image 
                source={CommentBtn} 
                style={{ width: 23, height: 23 }}
            />
        </TouchableOpacity>
    );
}
