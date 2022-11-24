import BellIcon from "../../../../assets/Bell_Icon.png";
import {Image, TouchableOpacity} from "react-native";

export default function Bell({onPress, style}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={style}
        >
            <Image
                source={BellIcon}
                style={{width: 25, height: 25}}
            />
        </TouchableOpacity>
    )
}
