import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import Header from '../../components/common/Header';
import PaymentMethod from '../../components/checkout/PaymentMethod';
import BottomNavigation from '../../components/checkout/BottomNavigation';

const ShippingScreen = ({ navigation }) => {
    const [selectedMethod, setSelectedMethod] = useState('visa');

    const paymentMethods = [
        {
            id: 'visa',
            method: 'VISA',
            icon: require('../../assets/images/visa.png'),
            lastDigits: '2109'
        },
        {
            id: 'paypal',
            method: 'PayPal',
            icon: require('../../assets/images/paypal.png'),
            lastDigits: '2109'
        },
        {
            id: 'mastercard',
            method: 'Mastercard',
            icon: require('../../assets/images/mastercard.png'),
            lastDigits: '2109'
        },
        {
            id: 'applepay',
            method: 'Apple Pay',
            icon: require('../../assets/images/applepay.png'),
            lastDigits: '2109'
        }
    ];

    const handleBack = () => {
        navigation.goBack();
    };

    const handleMethodSelect = (methodId) => {
        setSelectedMethod(methodId);
    };

    const handleContinue = () => {
        navigation.navigate('Success');
    };

    const handleTabPress = (tabId) => {
        // Handle tab navigation
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            <Header
                title="Checkout"
                onBack={handleBack}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                {/* Order Summary */}
                <View style={styles.orderSummary}>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Order</Text>
                        <Text style={styles.summaryValue}>₹ 7,000</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Shipping</Text>
                        <Text style={styles.summaryValue}>₹ 20</Text>
                    </View>
                    <View style={[styles.summaryRow, styles.totalRow]}>
                        <Text style={styles.totalLabel}>Total</Text>
                        <Text style={styles.totalValue}>₹ 7,020</Text>
                    </View>
                </View>

                {/* Payment Methods */}
                <View style={styles.paymentSection}>
                    <Text style={styles.sectionTitle}>Payment</Text>
                    {paymentMethods.map((method) => (
                        <PaymentMethod
                            key={method.id}
                            method={method.method}
                            icon={method.icon}
                            lastDigits={method.lastDigits}
                            isSelected={selectedMethod === method.id}
                            onSelect={() => handleMethodSelect(method.id)}
                        />
                    ))}
                </View>

                {/* Continue Button */}
                <TouchableOpacity
                    style={styles.continueButton}
                    onPress={handleContinue}
                >
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
            </ScrollView>

            <BottomNavigation
                activeTab="cart"
                onTabPress={handleTabPress}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 16,
    },
    orderSummary: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    summaryLabel: {
        fontSize: 14,
        color: '#666',
    },
    summaryValue: {
        fontSize: 14,
        color: '#000',
        fontWeight: '500',
    },
    totalRow: {
        marginTop: 8,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    totalValue: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    paymentSection: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginBottom: 16,
    },
    continueButton: {
        backgroundColor: '#FF4081',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        marginBottom: 16,
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default ShippingScreen; 