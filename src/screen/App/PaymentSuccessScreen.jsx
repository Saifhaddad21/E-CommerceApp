import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const PaymentSuccessScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Success Message */}
            <View style={styles.successBox}>
                <Image source={require('../../assets/images/paymentdone.png')} style={styles.icon} />
                <Text style={styles.successText}>Payment done successfully.</Text>
            </View>

            {/* Masked Cards */}
            <View style={styles.cardBox}>
                <TextInput style={styles.input} value="•••• •••• •••• 2109" editable={false} />
                <TextInput style={styles.input} value="•••• •••• •••• 2109" editable={false} />
            </View>

            {/* Continue Button */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../../assets/icons/home.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../../assets/icons/heart.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Walet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../../assets/icons/store.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Store</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../../assets/icons/search.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../../assets/icons/setting.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Settings</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcd7e4',
        padding: 20,
        justifyContent: 'space-between',
    },
    successBox: {
        alignItems: 'center',
        marginTop: 80,
    },
    icon: {
        width: 80,
        height: 80,
        marginBottom: 20,
        resizeMode: 'contain',
    },
    successText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    cardBox: {
        gap: 15,
        marginTop: 40,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#000',
        elevation: 2,
    },
    button: {
        backgroundColor: '#d43f70',
        paddingVertical: 16,
        borderRadius: 10,
        marginVertical: 30,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    navItem: {
        alignItems: 'center',
    },
    navIcon: {
        width: 24,
        height: 24,
        marginBottom: 5,
    },
    navText: {
        fontSize: 12,
        color: '#666',
    },
});

export default PaymentSuccessScreen;