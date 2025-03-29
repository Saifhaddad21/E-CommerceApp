import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const BottomNavigation = ({ tabs, activeTab, onTabPress }) => {
    return (
        <View style={styles.container}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab.id}
                    style={styles.tab}
                    onPress={() => onTabPress(tab.id)}
                >
                    <Image
                        source={tab.icon}
                        style={[
                            styles.icon,
                            activeTab === tab.id && styles.activeIcon
                        ]}
                    />
                    <Text style={[
                        styles.label,
                        activeTab === tab.id && styles.activeLabel
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
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
        paddingVertical: SIZES.padding.sm,
        paddingBottom: SIZES.padding.md,
    },
    tab: {
        alignItems: 'center',
    },
    icon: {
        width: SIZES.iconMd,
        height: SIZES.iconMd,
        marginBottom: 4,
        tintColor: COLORS.text.light,
    },
    activeIcon: {
        tintColor: COLORS.primary,
    },
    label: {
        fontSize: SIZES.small,
        color: COLORS.text.light,
    },
    activeLabel: {
        color: COLORS.primary,
    },
});

export default BottomNavigation; 