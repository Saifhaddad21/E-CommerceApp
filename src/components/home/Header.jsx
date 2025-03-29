import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/icons/menu.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>

            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/images/Group34010.png')}
                    style={styles.logo}
                />
                <Text style={styles.logoText}>Stylish</Text>
            </View>

            <TouchableOpacity>
                <Image
                    source={require('../../assets/images/womanicon.png')}
                    style={styles.profileImage}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    icon: {
        width: 24,
        height: 24,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 24,
        height: 24,
        marginRight: 5,
    },
    logoText: {
        fontSize: SIZES.large,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    profileImage: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
    },
});

export default Header; 