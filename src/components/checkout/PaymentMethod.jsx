import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PaymentMethod = ({ method, isSelected, onSelect, icon, lastDigits }) => {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                isSelected && styles.selectedContainer
            ]}
            onPress={onSelect}
        >
            <View style={styles.leftContent}>
                <Image source={icon} style={styles.icon} />
                <View style={styles.textContainer}>
                    <Text style={styles.methodName}>{method}</Text>
                    {lastDigits && (
                        <Text style={styles.cardNumber}>****{lastDigits}</Text>
                    )}
                </View>
            </View>
            <View style={[
                styles.radioButton,
                isSelected && styles.radioButtonSelected
            ]}>
                <View style={isSelected ? styles.radioInnerSelected : null} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },
    selectedContainer: {
        borderColor: '#FF4081',
        backgroundColor: '#FFF0F5',
    },
    leftContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 32,
        height: 32,
        marginRight: 12,
    },
    textContainer: {
        justifyContent: 'center',
    },
    methodName: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000',
        marginBottom: 2,
    },
    cardNumber: {
        fontSize: 12,
        color: '#666',
    },
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#E0E0E0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioButtonSelected: {
        borderColor: '#FF4081',
    },
    radioInnerSelected: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#FF4081',
    },
});

export default PaymentMethod; 