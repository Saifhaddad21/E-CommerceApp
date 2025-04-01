import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

const BottomNavigation = ({ activeTab, onTabPress }) => {
    const tabs = [
        { id: 'home', icon: 'home-outline', label: 'Home' },
        { id: 'wishlist', icon: 'heart-outline', label: 'Wishlist' },
        { id: 'cart', icon: 'cart-outline', label: 'Cart' },
        { id: 'search', icon: 'search-outline', label: 'Search' },
        { id: 'settings', iconComponent: Feather, icon: 'settings', label: 'Setting' }
    ];

    return (
        <View style={styles.container}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab.id}
                    style={[
                        styles.tab,
                        tab.id === 'cart' && styles.cartTab,
                        tab.id === activeTab && styles.activeTab
                    ]}
                    onPress={() => onTabPress(tab.id)}
                >
                    {tab.id === 'cart' ? (
                        <View style={styles.cartIconContainer}>
                            <Icon name={tab.icon} size={24} color="#fff" />
                        </View>
                    ) : tab.iconComponent ? (
                        <tab.iconComponent name={tab.icon} size={24} color={tab.id === activeTab ? '#FF4081' : '#888'} />
                    ) : (
                        <Icon name={tab.icon} size={24} color={tab.id === activeTab ? '#FF4081' : '#888'} />
                    )}
                    <Text style={[
                        styles.tabLabel,
                        tab.id === activeTab && styles.activeTabLabel
                    ]}>
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
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
        paddingBottom: 8,
        paddingTop: 12,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cartTab: {
        marginTop: -25,
    },
    activeTab: {
        color: '#FF4081',
    },
    cartIconContainer: {
        backgroundColor: '#FF4081',
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: '#fff',
        marginBottom: 4,
    },
    tabLabel: {
        fontSize: 12,
        color: '#888',
        marginTop: 4,
    },
    activeTabLabel: {
        color: '#FF4081',
    },
});

export default BottomNavigation; 