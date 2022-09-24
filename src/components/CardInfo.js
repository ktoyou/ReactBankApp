import Header from "./card/Header";
import Balance from "./card/Balance";
import Card from "./card/Card";
import Payments from "./payment/Payments";
import {View} from "react-native";

const data = {
    balance: '4,434,00',
    card: {
        number: '**** **** 5678',
        firstName: 'NICK',
        lastName: 'OHMY',
        expiration: '05/24'
    },
    payments: [
        {id: 0, title: 'Walmart', enteredPayments: 4, allPayments: 12, sum: '20.00'},
        {id: 1, title: 'Champion', enteredPayments: 2, allPayments: 4, sum: '423.00'},
        {id: 3, title: 'Daniil', enteredPayments: 3, allPayments: 15, sum: '12.00'},
        {id: 4, title: 'Vladick', enteredPayments: 3, allPayments: 5, sum: '1229.00'},
    ]
}

const CardInfo = () => {
    const onAccountButtonClick = (e) => {
        alert("Todo account")
    }

    const onHistoryButtonClick = (e) => {
        alert("Todo history")
    }

    return (
        <View style={{
            paddingTop: 20,
            paddingLeft: 20,
            paddingRight: 20
        }}>
            <Header onAccountButtonClick={onAccountButtonClick} onHistoryButtonClick={onHistoryButtonClick}/>
            <Balance balance={data.balance}/>
            <Card card={data.card}/>
            <Payments payments={data.payments}/>
        </View>
    )
}

export default CardInfo