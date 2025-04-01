import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CartItem = ({ image, title, price, quantity, size, onQuantityChange }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.priceRow}>
                    <Text style={styles.price}>$ {price}</Text>
                    <Text style={styles.discount}>50% OFF</Text>
                </View>
                <View style={styles.optionsRow}>
                    <View style={styles.sizeContainer}>
                        <Text style={styles.optionLabel}>Size:</Text>
                        <Text style={styles.optionValue}>{size}</Text>
                    </View>
                    <View style={styles.quantityContainer}>
                        <Text style={styles.optionLabel}>Qty:</Text>
                        <TouchableOpacity onPress={() => onQuantityChange(quantity - 1)}>
                            <Icon name="remove-circle-outline" size={20} color="#666" />
                        </TouchableOpacity>
                        <Text style={styles.quantity}>{quantity}</Text>
                        <TouchableOpacity onPress={() => onQuantityChange(quantity + 1)}>
                            <Icon name="add-circle-outline" size={20} color="#666" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },
    image: {
        width: 80,
        height: 100,
        borderRadius: 8,
        marginRight: 12,
    },
    details: {
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000',
        marginBottom: 4,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginRight: 8,
    },
    discount: {
        fontSize: 12,
        color: '#FF4081',
        fontWeight: '500',
    },
    optionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sizeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionLabel: {
        fontSize: 12,
        color: '#666',
        marginRight: 4,
    },
    optionValue: {
        fontSize: 12,
        color: '#000',
        fontWeight: '500',
    },
    quantity: {
        fontSize: 14,
        color: '#000',
        fontWeight: '500',
        marginHorizontal: 8,
    },
});

export default CartItem; 