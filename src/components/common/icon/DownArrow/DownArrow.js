import {Image, TouchableOpacity} from "react-native";
import DownArrowImage from "../../../../assets/arrow_down.png";

export default function DownArrow({onPress}) {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Image source={DownArrowImage}
                   style={{width: 20, height: 20}}
            />
        </TouchableOpacity>
    )
}
