import {Button, Text, TouchableHighlight, View} from 'react-native'
import constants from "../../constants"
import PrimaryButton from "../buttons/PrimaryButton";

const Header = ({onAccountButtonClick, onHistoryButtonClick}) => {
    return (
        <View style={{paddingTop: 50, justifyContent: 'center'}}>
            <Text style={{color: constants.COLORS.white, fontSize: constants.FONTS.h1, fontWeight: 'bold'}}>My cards</Text>
            <View style={{flexWrap: 'wrap', flexDirection: 'row', paddingTop: 30}}>
                <PrimaryButton onClick={onAccountButtonClick} marginRight={15} height={45} title={'Account'}/>
                <PrimaryButton onClick={onHistoryButtonClick} height={45} title={'History'}/>
            </View>
        </View>
    )
}

export default Header