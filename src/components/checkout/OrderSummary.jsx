import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const OrderSummary = ({ orderData }) => {
    const { order, shipping, total } = orderData;

    const formatCurrency = (value) => {
        return `${value.currency} ${value.amount.toLocaleString()}`;
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.label}>Order</Text>
                <Text style={styles.value}>{formatCurrency(order)}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Shipping</Text>
                <Text style={styles.value}>{formatCurrency(shipping)}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.row}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValue}>{formatCurrency(total)}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background.secondary,
        borderRadius: SIZES.radiusMd,
        padding: SIZES.padding.lg,
        marginBottom: SIZES.margin.lg,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SIZES.margin.sm,
    },
    label: {
        fontSize: SIZES.medium,
        color: COLORS.text.primary,
    },
    value: {
        fontSize: SIZES.medium,
        color: COLORS.text.primary,
    },
    divider: {
        height: 1,
        backgroundColor: COLORS.border,
        marginVertical: SIZES.margin.sm,
    },
    totalLabel: {
        fontSize: SIZES.large,
        fontWeight: 'bold',
        color: COLORS.text.primary,
    },
    totalValue: {
        fontSize: SIZES.large,
        fontWeight: 'bold',
        color: COLORS.text.primary,
    },
});

export default OrderSummary; 