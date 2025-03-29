import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const CategoryBanner = ({ banner }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.banner, { backgroundColor: banner.backgroundColor }]}>
                <View style={styles.content}>
                    <Text style={styles.title}>{banner.title}</Text>
                    <Text style={styles.subtitle}>{banner.subtitle}</Text>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Shop now →</Text>
                    </TouchableOpacity>
                </View>

                <Image source={banner.image} style={styles.image} resizeMode="contain" />
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
        overflow: 'hidden',
        paddingVertical: 10,
        paddingHorizontal: 15,
        height: 100,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: SIZES.large,
        fontWeight: 'bold',
        color: COLORS.text.primary,
        marginBottom: 4,
    },
    subtitle: {
        fontSize: SIZES.small,
        color: COLORS.text.secondary,
        marginBottom: 8,
    },
    button: {
        backgroundColor: COLORS.black,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: COLORS.white,
        fontSize: SIZES.small,
    },
    image: {
        width: '40%',
        height: '100%',
    },
});

export default CategoryBanner; 