import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const CategoryFilter = ({ categories, activeCategory, onCategoryPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>All Featured</Text>
                <View style={styles.filterActions}>
                    <TouchableOpacity style={styles.sortButton}>
                        <Text style={styles.sortText}>Sort</Text>
                        <Image
                            source={require('../../assets/icons/sort.png')}
                            style={styles.actionIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterText}>Filter</Text>
                        <Image
                            source={require('../../assets/icons/filter.png')}
                            style={styles.actionIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.categoriesContainer}
            >
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category.id}
                        style={styles.categoryItem}
                        onPress={() => onCategoryPress(category.id)}
                    >
                        <View style={styles.categoryIconContainer}>
                            <Image
                                source={category.icon}
                                style={styles.categoryIcon}
                                resizeMode="contain"
                            />
                        </View>
                        <Text style={styles.categoryName}>{category.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    header: {
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
    filterActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sortButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    sortText: {
        fontSize: SIZES.small,
        color: COLORS.text.secondary,
        marginRight: 4,
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterText: {
        fontSize: SIZES.small,
        color: COLORS.text.secondary,
        marginRight: 4,
    },
    actionIcon: {
        width: 16,
        height: 16,
        tintColor: COLORS.text.secondary,
    },
    categoriesContainer: {
        paddingLeft: 15,
    },
    categoryItem: {
        alignItems: 'center',
        marginRight: 15,
    },
    categoryIconContainer: {
        width: SIZES.categoryIconSize,
        height: SIZES.categoryIconSize,
        borderRadius: SIZES.categoryIconSize / 2,
        backgroundColor: COLORS.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    categoryIcon: {
        width: SIZES.categoryIconSize * 0.6,
        height: SIZES.categoryIconSize * 0.6,
    },
    categoryName: {
        fontSize: SIZES.small,
        color: COLORS.text.primary,
        marginTop: 5,
        textAlign: 'center',
    },
});

export default CategoryFilter; 