import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';
import StarRating from './StarRating';

const ProductCard = ({ product, style }) => {
    return (
        <TouchableOpacity style={[styles.container, style]}>
            <Image
                source={product.image}
                style={styles.image}
                resizeMode="cover"
            />

            <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
                <Text style={styles.description} numberOfLines={2}>{product.description}</Text>

                <View style={styles.priceContainer}>
                    <Text style={styles.price}>₹{product.price}</Text>
                    {product.originalPrice && (
                        <Text style={styles.originalPrice}>₹{product.originalPrice}</Text>
                    )}
                </View>

                <View style={styles.ratingContainer}>
                    <StarRating rating={product.rating} />
                    <Text style={styles.reviewCount}>({product.reviewCount})</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: SIZES.productCardWidth,
        marginRight: 15,
    },
    image: {
        width: '100%',
        height: SIZES.productCardWidth,
        borderRadius: SIZES.radius,
    },
    infoContainer: {
        marginTop: 5,
    },
    title: {
        fontSize: SIZES.medium,
        fontWeight: '500',
        color: COLORS.text.primary,
    },
    description: {
        fontSize: SIZES.tiny,
        color: COLORS.text.secondary,
        marginTop: 2,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    price: {
        fontSize: SIZES.medium,
        fontWeight: 'bold',
        marginRight: 5,
    },
    originalPrice: {
        fontSize: SIZES.small,
        color: COLORS.text.light,
        textDecorationLine: 'line-through',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    reviewCount: {
        fontSize: SIZES.tiny,
        color: COLORS.text.secondary,
        marginLeft: 4,
    },
});

export default ProductCard; 