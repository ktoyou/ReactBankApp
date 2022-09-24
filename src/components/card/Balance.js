import {Image, Text, View} from "react-native"
import constants from "../../constants"
import add from '../../icons/add.png'

const Balance = ({balance}) => {

    return (
        <View style={{
            marginTop: 30,
            width: '100%',
            borderColor: constants.COLORS.border,
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 25,
            paddingRight: 25,
            paddingTop: 15,
            paddingBottom: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <View>
                <Text style={{
                    color: constants.COLORS.white,
                    opacity: 0.3,
                    marginBottom: 10
                }}>Inpay Balance</Text>
                <Text style={{
                    color: constants.COLORS.white,
                    fontSize: constants.FONTS.h1,
                    fontWeight: 'bold'
                }}>${balance}</Text>
            </View>
            <View>
                <Image style={{
                    height: 32,
                    width: 32
                }} source={add}/>
            </View>
        </View>
    )
}

export default Balance