import constants from "../../constants"
import {Image, Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import nfc from '../../icons/nfc.png'

const Card = ({card}) => {

    return (
        <View style={{
            width: '100%',
            height: 220,
            paddingTop: 35,
            paddingBottom: 25,
            paddingLeft: 25,
            paddingRight: 25,
            marginTop: 25,
            borderRadius: 10,
            backgroundColor: '#4c669f',
            borderWidth: 1,
            borderColor: constants.COLORS.border
        }}>
            <View style={{
                paddingBottom: 60,
            }}>
                <Image style={{
                    height: 38,
                    width: 38
                }} source={nfc}/>
            </View>

            <View>
                <Text style={{
                    fontSize: constants.FONTS.h1,
                    color: constants.COLORS.white,
                    fontWeight: 'bold',
                    marginBottom: 5
                }}>{card.number}</Text>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        marginRight: 15,
                        color: constants.COLORS.white,
                        fontWeight: '500'
                    }}>{card.firstName} {card.lastName}</Text>
                    <Text style={{
                        color: constants.COLORS.white,
                        fontWeight: '500'
                    }}>{card.expiration}</Text>
                </View>
            </View>
        </View>
    )
}

export default Card