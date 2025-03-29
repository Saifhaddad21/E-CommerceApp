// components/OnboardingItem.js
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const OnboardingItem = ({ item }) => {
    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );
};

export default OnboardingItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        flex: 0.6,
        justifyContent: 'center',
        width: width * 0.8,
        height: height * 0.4,
    },
    title: {
        fontSize: width * 0.06,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    description: {
        fontSize: width * 0.04,
        color: '#666',
        textAlign: 'center',
        paddingTop: 10,
        paddingHorizontal: 20,
    },
});