import { View } from 'react-native';
import constants from './src/constants'
import Navigation from "./src/components/Navigation";
import {useState} from "react";
import CardInfo from "./src/components/CardInfo";

const introductions = [
    {id: 0, title: 'Buy what you love now. Pay later.', subtitle: 'Get what you want and break the payments up over weeks'}
]

const App = () => {
    const [component, setComponent] = useState(<CardInfo/>)
    const changeComponent = (component) => setComponent(component)

    return (
        <View style={{backgroundColor: constants.COLORS.bg, height: '100%'}}>
            {component}
            <Navigation onChangeComponent={changeComponent}/>
        </View>
  );
}

export default App