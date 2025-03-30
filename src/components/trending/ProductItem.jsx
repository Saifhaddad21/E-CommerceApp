import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';
import StarRating from './StarRating';

const ProductItem = ({ product, onPress }) => {
    const isOnSale = product.originalPrice && product.originalPrice > product.price;

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => onPress(product.id)}
            activeOpacity={0.8}
        >
            <Image
                source={product.image}
                style={styles.image}
                resizeMode="cover"
            />

            <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
                <Text style={styles.description} numberOfLines={2}>{product.description}</Text>

                <View style={styles.priceContainer}>
                    <Text style={styles.price}>₹{product.price}</Text>
                    {isOnSale && (
                        <Text style={styles.originalPrice}>₹{product.originalPrice}</Text>
                    )}
                </View>

                <View style={styles.ratingContainer}>
                    <StarRating rating={product.rating} />
                    <Text style={styles.reviewCount}>{product.reviewCount}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        overflow: 'hidden',
        marginBottom: 15,
        width: '48%',
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 150,
    },
    infoContainer: {
        padding: 8,
    },
    title: {
        fontSize: SIZES.medium,
        fontWeight: '500',
        color: COLORS.text.primary,
        marginBottom: 4,
    },
    description: {
        fontSize: SIZES.tiny,
        color: COLORS.text.secondary,
        marginBottom: 6,
        lineHeight: 16,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    price: {
        fontSize: SIZES.medium,
        fontWeight: 'bold',
        color: COLORS.text.primary,
        marginRight: 8,
    },
    originalPrice: {
        fontSize: SIZES.small,
        color: COLORS.text.light,
        textDecorationLine: 'line-through',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    reviewCount: {
        fontSize: SIZES.tiny,
        color: COLORS.text.secondary,
        marginLeft: 4,
    },
});

export default ProductItem; 