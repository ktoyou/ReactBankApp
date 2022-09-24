import constants from "../../constants";
import {FlatList, SafeAreaView, Text, View} from "react-native";
import PaymentItem from "./PaymentItem";
import {useState} from "react";

const Payments = ({payments}) => {

    const [scrollOffset, setScrollOffset] = useState(0)

    return (
        <View style={{
            paddingTop: 20,
            maxHeight: 220
        }}>
            <Text style={{
                color: constants.COLORS.white,
                fontSize: constants.FONTS.h2,
                fontWeight: '500',
                marginBottom: 25
            }}>My Payments</Text>
            <SafeAreaView>
                <FlatList onScroll={(e) => setScrollOffset(e.nativeEvent.contentOffset.y)} keyExtractor={item => item.id} data={payments} renderItem={({item}) => <PaymentItem payment={item}/>}/>
            </SafeAreaView>
        </View>
    )
}

export default Payments