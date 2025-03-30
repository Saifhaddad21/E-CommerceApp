// components/OnboardingItem.js
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

const OnboardingItem = ({ item }) => {
    return (
        <View style={[styles.container, { width }]}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.splashHeader}>Splash screen</Text>
            <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} resizeMode="contain" />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );
};

export default OnboardingItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    splashHeader: {
        fontSize: 14,
        color: '#aaa',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: height * 0.05,
    },
    image: {
        width: width * 0.7,
        height: width * 0.7,
    },
    textContainer: {
        flex: 0.4,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        lineHeight: 22,
        paddingHorizontal: 20,
    },
});