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
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNavigation from '../../components/checkout/BottomNavigation';

const PlaceOrderScreen = ({ navigation }) => {
    const [appliedCoupon, setAppliedCoupon] = useState(null);

    const handleBack = () => {
        navigation.goBack();
    };

    const handleApplyCoupon = () => {
        // Implement coupon logic
    };

    const handleProceedToPayment = () => {
        navigation.navigate('Shipping');
    };

    const handleTabPress = (tabId) => {
        // Handle tab navigation
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            <Header
                title="Shopping Bag"
                onBack={handleBack}
                rightIcon="heart-outline"
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                {/* Order Details */}
                <View style={styles.orderDetails}>
                    <View style={styles.orderRow}>
                        <Text style={styles.orderLabel}>Order</Text>
                        <Text style={styles.orderValue}>₹ 7,000</Text>
                    </View>
                    <View style={styles.orderRow}>
                        <Text style={styles.orderLabel}>Shipping</Text>
                        <Text style={styles.orderValue}>₹ 20</Text>
                    </View>
                    <View style={[styles.orderRow, styles.totalRow]}>
                        <Text style={styles.totalLabel}>Total</Text>
                        <Text style={styles.totalValue}>₹ 7,020</Text>
                    </View>
                </View>

                {/* Apply Coupon */}
                <TouchableOpacity
                    style={styles.couponButton}
                    onPress={handleApplyCoupon}
                >
                    <Icon name="pricetag-outline" size={20} color="#000" />
                    <Text style={styles.couponText}>Apply Coupons</Text>
                    <Icon name="chevron-forward" size={20} color="#000" />
                </TouchableOpacity>

                {/* Order Payment Details */}
                <View style={styles.paymentDetails}>
                    <Text style={styles.sectionTitle}>Order Payment Details</Text>
                    <View style={styles.paymentRow}>
                        <Text style={styles.paymentLabel}>Order Amount</Text>
                        <Text style={styles.paymentValue}>₹ 7,000.00</Text>
                    </View>
                    <View style={styles.paymentRow}>
                        <Text style={styles.paymentLabel}>Convenience Fee</Text>
                        <TouchableOpacity style={styles.knowMoreButton}>
                            <Text style={styles.knowMoreText}>Know More</Text>
                        </TouchableOpacity>
                        <Text style={styles.paymentValue}>Free</Text>
                    </View>
                    <View style={styles.paymentRow}>
                        <Text style={styles.paymentLabel}>Delivery Fee</Text>
                        <Text style={styles.paymentValue}>₹ 20.00</Text>
                    </View>
                    <View style={[styles.paymentRow, styles.totalPaymentRow]}>
                        <Text style={styles.totalPaymentLabel}>Total</Text>
                        <Text style={styles.totalPaymentValue}>₹ 7,020.00</Text>
                    </View>
                </View>

                {/* EMI Available */}
                <View style={styles.emiContainer}>
                    <Text style={styles.emiLabel}>EMI Available</Text>
                    <TouchableOpacity>
                        <Text style={styles.emiDetails}>Details</Text>
                    </TouchableOpacity>
                </View>

                {/* Proceed Button */}
                <TouchableOpacity
                    style={styles.proceedButton}
                    onPress={handleProceedToPayment}
                >
                    <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
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
    orderDetails: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },
    orderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    orderLabel: {
        fontSize: 14,
        color: '#666',
    },
    orderValue: {
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
    couponButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },
    couponText: {
        flex: 1,
        marginLeft: 12,
        fontSize: 14,
        color: '#000',
    },
    paymentDetails: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginBottom: 16,
    },
    paymentRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    paymentLabel: {
        flex: 1,
        fontSize: 14,
        color: '#666',
    },
    paymentValue: {
        fontSize: 14,
        color: '#000',
        fontWeight: '500',
    },
    knowMoreButton: {
        marginRight: 8,
    },
    knowMoreText: {
        fontSize: 12,
        color: '#FF4081',
        textDecorationLine: 'underline',
    },
    totalPaymentRow: {
        marginTop: 8,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
    },
    totalPaymentLabel: {
        flex: 1,
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    totalPaymentValue: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    emiContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },
    emiLabel: {
        fontSize: 14,
        color: '#000',
    },
    emiDetails: {
        fontSize: 14,
        color: '#FF4081',
    },
    proceedButton: {
        backgroundColor: '#FF4081',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        marginBottom: 16,
    },
    proceedButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default PlaceOrderScreen; 