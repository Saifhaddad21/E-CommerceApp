import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const Banner = ({ banner, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
            <Image
                source={banner.image}
                style={styles.banner}
                resizeMode="cover"
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    banner: {
        width: '100%',
        height: SIZES.bannerHeight,
        borderRadius: SIZES.radius,
        marginBottom: SIZES.margin.lg,
    },
});

export default Banner; 