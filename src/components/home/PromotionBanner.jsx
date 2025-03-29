import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const PromotionBanner = ({ banner }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.banner, { backgroundColor: banner.backgroundColor }]}>
                <View style={styles.content}>
                    <Text style={styles.title}>{banner.title}</Text>
                    <Text style={styles.subtitle}>{banner.subtitle}</Text>
                    <Text style={styles.description}>{banner.description}</Text>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Shop Now</Text>
                        <Text style={styles.arrowIcon}>→</Text>
                    </TouchableOpacity>
                </View>

                <Image
                    source={banner.image}
                    style={styles.bannerImage}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.pagination}>
                <View style={[styles.dot, styles.activeDot]} />
                <View style={styles.dot} />
                <View style={styles.dot} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    banner: {
        flexDirection: 'row',
        borderRadius: SIZES.radius,
        height: SIZES.bannerHeight,
        overflow: 'hidden',
        padding: 15,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: SIZES.xlarge,
        fontWeight: 'bold',
        color: COLORS.white,
        marginBottom: 2,
    },
    subtitle: {
        fontSize: SIZES.small,
        color: COLORS.white,
        marginBottom: 2,
    },
    description: {
        fontSize: SIZES.small,
        color: COLORS.white,
        marginBottom: 10,
    },
    button: {
        backgroundColor: COLORS.white,
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: COLORS.text.primary,
        fontSize: SIZES.small,
        fontWeight: '500',
        marginRight: 3,
    },
    arrowIcon: {
        color: COLORS.text.primary,
        fontSize: SIZES.small,
    },
    bannerImage: {
        width: '40%',
        height: '100%',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: COLORS.gray,
        marginHorizontal: 2,
    },
    activeDot: {
        width: 18,
        backgroundColor: COLORS.primary,
    },
});

export default PromotionBanner; 