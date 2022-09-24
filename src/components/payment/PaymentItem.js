import constants from "../../constants";
import {Text, View} from "react-native";


const PaymentItem = ({payment}) => {
    return (
        <View style={{
            borderRadius: 100,
            borderColor: constants.COLORS.white,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 26
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <View style={{
                    backgroundColor: '#E4CA8A',
                    height: 48,
                    width: 48,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}><Text style={{
                    color: constants.COLORS.white,
                    fontWeight: '500',
                    fontSize: constants.FONTS.h3
                }}>{payment.title[0]}</Text></View>

                <View style={{
                    marginLeft: 15
                }}>
                    <Text style={{
                        color: constants.COLORS.white,
                        fontWeight: 'bold',
                        fontSize: constants.FONTS.h4,
                        marginBottom: 4
                    }}>{payment.title}</Text>
                    <Text style={{
                        color: constants.COLORS.white,
                        opacity: 0.5
                    }}>{payment.enteredPayments} of {payment.allPayments} paid</Text>
                </View>
            </View>

            <Text style={{
                color: constants.COLORS.white,
                fontWeight: 'bold',
                fontSize: constants.FONTS.h4
            }}>${payment.sum}</Text>
        </View>
    )
}

export default PaymentItem