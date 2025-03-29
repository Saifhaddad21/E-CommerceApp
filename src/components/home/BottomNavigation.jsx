import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const BottomNavigation = ({ activeTab }) => {
    const tabs = [
        { id: 'home', label: 'Home', icon: require('../../assets/icons/home.png') },
        { id: 'wishlist', label: 'Wishlist', icon: require('../../assets/icons/heart.png') },
        { id: 'cart', label: 'Cart', icon: require('../../assets/icons/cart.png') },
        { id: 'search', label: 'Search', icon: require('../../assets/icons/search2.png') },
        { id: 'setting', label: 'Setting', icon: require('../../assets/icons/settings.png') },
    ];

    return (
        <View style={styles.container}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab.id}
                    style={styles.tab}
                >
                    <Image
                        source={tab.icon}
                        style={[
                            styles.icon,
                            activeTab === tab.id && styles.activeIcon
                        ]}
                    />
                    <Text
                        style={[
                            styles.label,
                            activeTab === tab.id && styles.activeLabel
                        ]}
                    >
                        {tab.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
        paddingVertical: 8,
        backgroundColor: COLORS.white,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: COLORS.bottomNavInactive,
        marginBottom: 4,
    },
    activeIcon: {
        tintColor: COLORS.primary,
    },
    label: {
        fontSize: SIZES.tiny,
        color: COLORS.bottomNavInactive,
    },
    activeLabel: {
        color: COLORS.primary,
    },
});

export default BottomNavigation; 