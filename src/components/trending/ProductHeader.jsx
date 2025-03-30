import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const ProductHeader = ({ itemCount, onSortPress, onFilterPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.itemCount}>{itemCount}+ Items</Text>
            <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.filterButton} onPress={onSortPress}>
                    <Text style={styles.filterText}>Sort</Text>
                    <Image
                        source={require('../../assets/icons/Vector.png')}
                        style={styles.filterIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton} onPress={onFilterPress}>
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
        marginBottom: 15,
    },
    itemCount: {
        fontSize: SIZES.large,
        fontWeight: '600',
        color: COLORS.text.primary,
    },
    filterContainer: {
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

export default ProductHeader; 