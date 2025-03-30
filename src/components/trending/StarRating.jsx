import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const StarRating = ({ rating, size = 12 }) => {
    // Convert rating to the number of full and empty stars
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
        <View style={styles.container}>
            {/* Render full stars */}
            {[...Array(fullStars)].map((_, i) => (
                <Image
                    key={`full-${i}`}
                    source={require('../../assets/icons/star-filled.png')}
                    style={[styles.star, { width: size, height: size }]}
                />
            ))}

            {/* Render empty stars */}
            {[...Array(emptyStars)].map((_, i) => (
                <Image
                    key={`empty-${i}`}
                    source={require('../../assets/icons/star-empty.png')}
                    style={[styles.star, { width: size, height: size }]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    star: {
        marginRight: 2,
        tintColor: COLORS.star,
    },
});

export default StarRating; 