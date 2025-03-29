import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SIZES } from '../../styles/sizes';

const PromotionCard = ({ promotion, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress(promotion.id)} activeOpacity={0.9}>
            <Image
                source={promotion.image}
                style={styles.image}
                resizeMode="cover"
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: SIZES.promoHeight,
        borderRadius: SIZES.radius - 2,
        marginBottom: SIZES.margin.lg,
    },
});

export default PromotionCard; 