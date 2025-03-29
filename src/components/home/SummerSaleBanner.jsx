import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const SummerSaleBanner = ({ banner }) => {
    return (
        <View style={styles.container}>
            <Image
                source={banner.image}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: SIZES.radius,
    },
});

export default SummerSaleBanner; 