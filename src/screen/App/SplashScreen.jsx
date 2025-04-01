import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('OnboardingScreen');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.logoBox}>
                <Image
                    source={require('../../assets/images/Group34010.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.text}>Stylish</Text>
            </View>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff',
        justifyContent: 'center', alignItems: 'center'
    },
    logoBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: width * 0.2,
        height: width * 0.2,
        marginRight: 10,
    },
    text: {
        fontSize: width * 0.08,
        fontWeight: 'bold',
        color: '#d32f2f',
    }
});