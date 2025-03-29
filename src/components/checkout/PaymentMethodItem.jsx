import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { CreditCard, DollarSign, Circle } from 'lucide-react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const PaymentMethodItem = ({ method, selected, onSelect }) => {
    const renderIcon = () => {
        switch (method.iconType) {
            case 'CreditCard':
                return <CreditCard size={SIZES.iconMd} color={COLORS.text.primary} />;
            case 'DollarSign':
                return <DollarSign size={SIZES.iconMd} color={COLORS.text.primary} />;
            case 'Circle':
            default:
                return <Circle size={SIZES.iconMd} color={COLORS.text.primary} />;
        }
    };

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => onSelect(method.id)}
        >
            <View style={styles.leftSection}>
                {renderIcon()}
                <Text style={styles.methodName}>{method.name}</Text>
            </View>
            <View style={styles.rightSection}>
                <Text style={styles.cardNumber}>•••••••••••{method.lastDigits}</Text>
                <RadioButton
                    value={method.id}
                    status={selected ? 'checked' : 'unchecked'}
                    onPress={() => onSelect(method.id)}
                    color={COLORS.primary}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: SIZES.padding.md,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    methodName: {
        fontSize: SIZES.medium,
        fontWeight: '500',
        marginLeft: SIZES.margin.md,
        color: COLORS.text.primary,
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardNumber: {
        fontSize: SIZES.small,
        color: COLORS.text.secondary,
        marginRight: SIZES.margin.sm,
    },
});

export default PaymentMethodItem; 