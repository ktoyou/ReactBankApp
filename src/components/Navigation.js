import container from '../constants'
import {Image, TouchableHighlight, View} from "react-native";
import card from '../icons/credit-card.png'
import blocks from '../icons/blocks.png'
import user from '../icons/user.png'
import CardInfo from "./CardInfo";
import Main from "./Main";
import User from "./User";
import {useState} from "react";

const Navigation = ({onChangeComponent}) => {
    const [component, setComponent] = useState()

    return (
        <View style={{
            height: "20%",
            width: "100%",
            backgroundColor: '#192128',
            bottom: -110,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 25,
            paddingRight: 25,
            paddingTop: 15,
            position: 'absolute'
        }}>
            <TouchableHighlight onPress={() => onChangeComponent(<CardInfo/>)} underlayColor={"transparent"}>
                <Image style={{
                    height: 32,
                    width: 32,
                }} source={card}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => onChangeComponent(<Main/>)} underlayColor={"transparent"}>
                <Image style={{
                    height: 32,
                    width: 32
                }} source={blocks}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => onChangeComponent(<User/>)} underlayColor={"transparent"}>
                <Image style={{
                    height: 32,
                    width: 32
                }} source={user}/>
            </TouchableHighlight>

        </View>
    )
}

export default Navigation