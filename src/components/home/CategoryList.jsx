import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const CategoryList = ({ categories, activeCategory, onCategoryPress }) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
            {categories.map((category, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.category,
                        activeCategory === category.id && styles.activeCategory
                    ]}
                    onPress={() => onCategoryPress(category.id)}
                >
                    <Text style={[
                        styles.categoryText,
                        activeCategory === category.id && styles.activeCategoryText
                    ]}>
                        {category.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: SIZES.margin.md,
    },
    contentContainer: {
        paddingRight: SIZES.padding.md,
    },
    category: {
        backgroundColor: COLORS.categoryBackground,
        paddingVertical: SIZES.padding.xs,
        paddingHorizontal: SIZES.padding.md,
        borderRadius: 20,
        marginRight: SIZES.margin.sm,
    },
    activeCategory: {
        backgroundColor: COLORS.primary,
    },
    categoryText: {
        color: COLORS.text.secondary,
        fontSize: SIZES.small,
    },
    activeCategoryText: {
        color: COLORS.white,
    },
});

export default CategoryList; 