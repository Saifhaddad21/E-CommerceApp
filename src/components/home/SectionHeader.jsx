import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const SectionHeader = ({ title, onViewAll }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            <TouchableOpacity onPress={onViewAll} style={styles.viewAllButton}>
                <Text style={styles.viewAllText}>View all</Text>
                <Text style={styles.arrowIcon}>→</Text>
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
        marginBottom: 15,
    },
    title: {
        fontSize: SIZES.large,
        fontWeight: '600',
        color: COLORS.text.primary,
    },
    viewAllButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewAllText: {
        color: COLORS.primary,
        fontSize: SIZES.small,
        marginRight: 3,
    },
    arrowIcon: {
        color: COLORS.primary,
        fontSize: SIZES.small,
    },
});

export default SectionHeader; 