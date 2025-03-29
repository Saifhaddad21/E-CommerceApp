import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const Categories = ({ categories }) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
            {categories.map((category) => (
                <TouchableOpacity key={category.id} style={styles.category}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={category.image}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    </View>
                    <Text style={styles.name}>{category.name}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    contentContainer: {
        paddingHorizontal: 10,
    },
    category: {
        alignItems: 'center',
        marginHorizontal: 5,
        width: SIZES.categoryIconSize,
    },
    imageContainer: {
        width: SIZES.categoryIconSize,
        height: SIZES.categoryIconSize,
        borderRadius: SIZES.categoryIconSize / 2,
        overflow: 'hidden',
        marginBottom: 5,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    name: {
        fontSize: SIZES.small,
        color: COLORS.text.primary,
        textAlign: 'center',
    },
});

export default Categories; 