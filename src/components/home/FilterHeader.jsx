import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const FilterHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>All Featured</Text>
            <View style={styles.filtersContainer}>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterText}>Sort</Text>
                    <Image
                        source={require('../../assets/icons/Vector.png')}
                        style={styles.filterIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterText}>Filter</Text>
                    <Image
                        source={require('../../assets/icons/Component.png')}
                        style={styles.filterIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginTop: 5,
        marginBottom: 15,
    },
    title: {
        fontSize: SIZES.large,
        fontWeight: '600',
        color: COLORS.text.primary,
    },
    filtersContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
    },
    filterText: {
        fontSize: SIZES.small,
        color: COLORS.text.secondary,
        marginRight: 4,
    },
    filterIcon: {
        width: 16,
        height: 16,
        tintColor: COLORS.text.secondary,
    },
});

export default FilterHeader; 