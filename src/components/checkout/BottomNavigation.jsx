import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Home, Heart, ShoppingCart, Search, Settings } from 'lucide-react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const BottomNavigation = ({ activeTab = 'cart', onTabPress }) => {
    const tabs = [
        { id: 'home', icon: Home, label: 'Home' },
        { id: 'wishlist', icon: Heart, label: 'Wishlist' },
        { id: 'cart', icon: ShoppingCart, label: 'Cart' },
        { id: 'search', icon: Search, label: 'Search' },
        { id: 'settings', icon: Settings, label: 'Setting' },
    ];

    return (
        <View style={styles.container}>
            {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                    <TouchableOpacity
                        key={tab.id}
                        style={styles.tabButton}
                        onPress={() => onTabPress(tab.id)}
                    >
                        <Icon
                            size={SIZES.iconMd}
                            color={isActive ? COLORS.primary : COLORS.text.secondary}
                        />
                        <Text
                            style={[
                                styles.tabLabel,
                                isActive && styles.activeTabLabel,
                            ]}
                        >
                            {tab.label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: COLORS.background.main,
        paddingVertical: SIZES.padding.md,
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabLabel: {
        fontSize: SIZES.xSmall,
        marginTop: SIZES.margin.xs,
        color: COLORS.text.secondary,
    },
    activeTabLabel: {
        color: COLORS.primary,
        fontWeight: '500',
    },
});

export default BottomNavigation; 