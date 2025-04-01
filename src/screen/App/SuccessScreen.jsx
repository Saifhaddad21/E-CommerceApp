import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import Header from '../../components/common/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNavigation from '../../components/checkout/BottomNavigation';

const SuccessScreen = ({ navigation }) => {
    const handleBack = () => {
        navigation.goBack();
    };

    const handleContinue = () => {
        navigation.navigate('Home');
    };

    const handleTabPress = (tabId) => {
        // Handle tab navigation
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#4A4A4A" barStyle="light-content" />

            <Header
                title="Checkout"
                onBack={handleBack}
                style={styles.header}
                titleStyle={styles.headerTitle}
            />

            <View style={styles.content}>
                {/* Success Icon */}
                <View style={styles.successIconContainer}>
                    <Icon name="checkmark-circle" size={80} color="#fff" />
                </View>

                <Text style={styles.successTitle}>Payment done successfully</Text>

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
                <View style={styles.paymentMethods}>
                    <View style={styles.paymentMethod}>
                        <View style={styles.paymentDot} />
                        <Text style={styles.paymentText}>****2109</Text>
                    </View>
                    <View style={styles.paymentMethod}>
                        <View style={styles.paymentDot} />
                        <Text style={styles.paymentText}>****2109</Text>
                    </View>
                    <View style={styles.paymentMethod}>
                        <View style={styles.paymentDot} />
                        <Text style={styles.paymentText}>****2109</Text>
                    </View>
                    <View style={styles.paymentMethod}>
                        <View style={styles.paymentDot} />
                        <Text style={styles.paymentText}>****2109</Text>
                    </View>
                </View>

                {/* Continue Button */}
                <TouchableOpacity
                    style={styles.continueButton}
                    onPress={handleContinue}
                >
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>

            <BottomNavigation
                activeTab="cart"
                onTabPress={handleTabPress}
                style={styles.bottomNav}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4A4A4A',
    },
    header: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0,
    },
    headerTitle: {
        color: '#fff',
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 40,
    },
    successIconContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    successTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 40,
    },
    orderSummary: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 8,
        padding: 16,
        marginBottom: 24,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    summaryLabel: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.8,
    },
    summaryValue: {
        fontSize: 14,
        color: '#fff',
    },
    totalRow: {
        marginTop: 8,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, 0.2)',
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    totalValue: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    paymentMethods: {
        marginBottom: 40,
    },
    paymentMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    paymentDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#fff',
        marginRight: 12,
    },
    paymentText: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.8,
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
    bottomNav: {
        backgroundColor: '#4A4A4A',
        borderTopColor: 'rgba(255, 255, 255, 0.1)',
    },
});

export default SuccessScreen; 