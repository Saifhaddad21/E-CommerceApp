import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ProductCard product={item} />}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingBottom: 5,
    },
});

export default ProductList; 