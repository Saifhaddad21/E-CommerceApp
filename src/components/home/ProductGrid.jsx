import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ProductCard from './ProductCard';
import { SIZES } from '../../styles/sizes';

const ProductGrid = ({ products, onProductPress }) => {
    const renderItem = ({ item, index }) => {
        return (
            <ProductCard
                product={item}
                onPress={onProductPress}
                style={[
                    index % 2 === 0 ? { marginRight: 8 } : { marginLeft: 8 }
                ]}
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.row}
                scrollEnabled={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    row: {
        justifyContent: 'space-between',
    },
});

export default ProductGrid; 