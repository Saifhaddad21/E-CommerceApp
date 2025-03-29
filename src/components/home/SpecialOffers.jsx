import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const SpecialOffers = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/specialoffer.png')}
                style={styles.icon}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>Special Offers</Text>
                <Text style={styles.description}>We make sure you get the offer you need at best prices.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: SIZES.large,
        fontWeight: '600',
        color: COLORS.text.primary,
        marginBottom: 2,
    },
    description: {
        fontSize: SIZES.small,
        color: COLORS.text.secondary,
    },
});

export default SpecialOffers; 