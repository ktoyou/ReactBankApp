import {Text, TouchableHighlight, View} from "react-native";
import constants from "../../constants";

const PrimaryButton = ({onClick, height, width, title, marginRight, marginLeft, marginTop, marginBottom}) => {
    return (
        <View>
            <TouchableHighlight style={{
                height: height,
                width: width,
                borderRadius: 100,
                backgroundColor: constants.COLORS.secondary,
                borderWidth: 1,
                borderColor: constants.COLORS.border,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: marginRight,
                marginBottom: marginBottom,
                marginTop: marginTop,
                marginLeft: marginLeft,
                paddingLeft: 25,
                paddingRight: 25}} onPress={(e) => onClick(e)} underlayColor={constants.COLORS.primary}>
                <Text style={{
                    color: constants.COLORS.white,
                    fontSize: constants.FONTS.h4}}>{title}</Text>
            </TouchableHighlight>
        </View>
    )
}

export default PrimaryButton