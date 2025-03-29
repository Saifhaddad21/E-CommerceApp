import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const SpecialOffer = ({ offer }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={offer.icon} style={styles.icon} />
                <Text style={styles.title}>{offer.title}</Text>
                <Text style={styles.description}>{offer.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    title: {
        fontSize: SIZES.large,
        fontWeight: '600',
        color: COLORS.text.primary,
        marginRight: 6,
    },
    description: {
        flex: 1,
        fontSize: SIZES.small,
        color: COLORS.text.secondary,
    },
});

export default SpecialOffer; 