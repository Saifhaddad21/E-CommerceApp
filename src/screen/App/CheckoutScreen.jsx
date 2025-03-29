import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CreditCard, Wallet, Circle, DollarSign } from "lucide-react-native";


const paymentMethods = [
    { id: '1', name: 'VISA', icon: <CreditCard size={24} color="black" /> },
    { id: '2', name: 'PayPal', icon: <DollarSign size={24} color="black" /> },
    { id: '3', name: 'MasterCard', icon: <Wallet size={24} color="black" /> },
    { id: '4', name: 'Other', icon: <Circle size={24} color="black" /> },
];


const CheckoutScreen = () => {
    const [selectedMethod, setSelectedMethod] = React.useState('1');

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Checkout</Text>
            <View style={styles.summaryContainer}>
                <Text style={styles.summaryText}>Order: ₹ 7,000</Text>
                <Text style={styles.summaryText}>Shipping: ₹ 30</Text>
                <Text style={styles.totalText}>Total: ₹ 7,030</Text>
            </View>
            <Text style={styles.paymentLabel}>Payment</Text>
            <FlatList
                data={paymentMethods}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.paymentOption} onPress={() => setSelectedMethod(item.id)}>
                        {item.icon}
                        <Text style={styles.paymentText}>{item.name}</Text>
                        <RadioButton
                            value={item.id}
                            status={selectedMethod === item.id ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedMethod(item.id)}
                            color="red"
                        />
                    </TouchableOpacity>
                )}
            />
            <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: wp('5%'),
    },
    header: {
        fontSize: wp('6%'),
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: hp('2%'),
    },
    summaryContainer: {
        backgroundColor: '#f8f8f8',
        padding: wp('4%'),
        borderRadius: wp('2%'),
        marginBottom: hp('2%'),
    },
    summaryText: {
        fontSize: wp('4.5%'),
        marginBottom: hp('1%'),
    },
    totalText: {
        fontSize: wp('5%'),
        fontWeight: 'bold',
    },
    paymentLabel: {
        fontSize: wp('5%'),
        fontWeight: 'bold',
        marginBottom: hp('1%'),
    },
    paymentOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: hp('1.5%'),
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    paymentIcon: {
        marginRight: wp('4%'),
    },
    paymentText: {
        fontSize: wp('4.5%'),
        flex: 1,
    },
    continueButton: {
        backgroundColor: 'red',
        paddingVertical: hp('2%'),
        borderRadius: wp('2%'),
        alignItems: 'center',
        marginTop: hp('3%'),
    },
    continueText: {
        color: '#fff',
        fontSize: wp('5%'),
        fontWeight: 'bold',
    },
});

export default CheckoutScreen;
