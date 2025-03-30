import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SIZES } from '../../styles/sizes';
import ProductItem from './ProductItem';

const ProductGrid = ({ products, onProductPress }) => {
    const renderItem = ({ item }) => (
        <ProductItem product={item} onPress={onProductPress} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
});

export default ProductGrid; 