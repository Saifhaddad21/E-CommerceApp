import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const PromoBanner = ({ banner, onPress }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.banner, { backgroundColor: banner.backgroundColor }]}>
                <View style={styles.content}>
                    <Text style={styles.discountText}>{banner.discount}</Text>
                    <Text style={styles.description}>{banner.description}</Text>
                    <Text style={styles.subText}>{banner.subtext}</Text>

                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text style={styles.buttonText}>{banner.buttonText}</Text>
                        <Image
                            source={require('../../assets/icons/arrow-right.png')}
                            style={styles.arrowIcon}
                        />
                    </TouchableOpacity>
                </View>

                <Image
                    source={banner.image}
                    style={styles.bannerImage}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.paginationContainer}>
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
        marginBottom: 20,
    },
    banner: {
        flexDirection: 'row',
        height: SIZES.bannerHeight,
        borderRadius: 10,
        overflow: 'hidden',
        padding: 15,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    discountText: {
        fontSize: SIZES.xxlarge,
        fontWeight: 'bold',
        color: COLORS.white,
        marginBottom: 5,
    },
    description: {
        fontSize: SIZES.small,
        color: COLORS.white,
        marginBottom: 3,
    },
    subText: {
        fontSize: SIZES.small,
        color: COLORS.white,
        marginBottom: 12,
    },
    button: {
        backgroundColor: COLORS.white,
        borderRadius: 15,
        paddingVertical: 6,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: COLORS.text.primary,
        fontSize: SIZES.small,
        fontWeight: '500',
        marginRight: 4,
    },
    arrowIcon: {
        width: 12,
        height: 12,
        tintColor: COLORS.text.primary,
    },
    bannerImage: {
        width: '50%',
        height: '100%',
    },
    paginationContainer: {
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
        backgroundColor: COLORS.primary,
        width: 18,
    },
});

export default PromoBanner; 