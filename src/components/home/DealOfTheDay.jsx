import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const DealOfTheDay = ({ onViewAll }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Deal of the Day</Text>
                    <View style={styles.timerContainer}>
                        <Text style={styles.timerText}>22h 55m 20s remaining</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={onViewAll} style={styles.viewAllButton}>
                    <Text style={styles.viewAllText}>View all</Text>
                    <Text style={styles.arrowIcon}>→</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.dealBackground,
        paddingVertical: 12,
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: COLORS.white,
        fontSize: SIZES.large,
        fontWeight: '600',
        marginRight: 10,
    },
    timerContainer: {
        backgroundColor: COLORS.timerBackground,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 12,
    },
    timerText: {
        color: COLORS.white,
        fontSize: SIZES.tiny,
    },
    viewAllButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewAllText: {
        color: COLORS.white,
        fontSize: SIZES.small,
        marginRight: 3,
    },
    arrowIcon: {
        color: COLORS.white,
        fontSize: SIZES.small,
    },
});

export default DealOfTheDay; 