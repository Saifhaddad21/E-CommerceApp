import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

// Components
import Header from '../../components/checkout/Header';
import OrderSummary from '../../components/checkout/OrderSummary';
import PaymentList from '../../components/checkout/PaymentList';
import Button from '../../components/checkout/Button';
import BottomNavigation from '../../components/checkout/BottomNavigation';

// Data
import paymentMethodsData from '../../data/paymentMethods';
import orderSummaryData from '../../data/orderSummary';

const CheckoutScreen = ({ navigation }) => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
        paymentMethodsData.find(method => method.isSelected)?.id
    );

    const handlePaymentMethodSelect = (id) => {
        setSelectedPaymentMethod(id);
    };

    const handleBackPress = () => {
        // Handle back navigation
        console.log('Back pressed');
    };

    const handleContinuePress = () => {
        // Handle continue button press
        console.log('Continue with payment method:', selectedPaymentMethod);
    };

    const handleTabPress = (tabId) => {
        // Handle bottom tab navigation
        console.log('Tab pressed:', tabId);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor={COLORS.background.main} barStyle="dark-content" />
            <View style={styles.container}>
                <Header title="Checkout" onBackPress={handleBackPress} />
                <OrderSummary orderData={orderSummaryData} />

                <PaymentList
                    paymentMethods={paymentMethodsData}
                    onMethodSelect={handlePaymentMethodSelect}
                />

                <Button title="Continue" onPress={handleContinuePress} />
            </View>

            <BottomNavigation activeTab="cart" onTabPress={handleTabPress} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background.main,
    },
    container: {
        flex: 1,
        paddingHorizontal: SIZES.padding.xl,
    },
});

export default CheckoutScreen;
