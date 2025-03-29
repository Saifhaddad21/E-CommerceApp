import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import PaymentMethodItem from './PaymentMethodItem';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const PaymentList = ({ paymentMethods, onMethodSelect }) => {
    const [selectedId, setSelectedId] = useState(
        paymentMethods.find(method => method.isSelected)?.id || paymentMethods[0]?.id
    );

    const handleMethodSelect = (id) => {
        setSelectedId(id);
        onMethodSelect(id);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Payment</Text>
            <FlatList
                data={paymentMethods}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <PaymentMethodItem
                        method={item}
                        selected={selectedId === item.id}
                        onSelect={handleMethodSelect}
                    />
                )}
                scrollEnabled={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: SIZES.margin.lg,
    },
    title: {
        fontSize: SIZES.large,
        fontWeight: 'bold',
        marginBottom: SIZES.margin.md,
        color: COLORS.text.primary,
    },
});

export default PaymentList; 