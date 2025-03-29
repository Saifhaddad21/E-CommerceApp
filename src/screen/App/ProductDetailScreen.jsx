import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ProductDetailScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../../assets/images/sneakers.jpeg')}
                style={styles.productImage}
                resizeMode="cover"
            />

            <View style={styles.sizeContainer}>
                {['7 UK', '8 UK', '9 UK', '10 UK'].map((size, index) => (
                    <TouchableOpacity key={index} style={styles.sizeButton}>
                        <Text style={styles.sizeText}>{size}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.productTitle}>Nike Sneakers</Text>
            <Text style={styles.subTitle}>Vision Alta Men's Shoes Size (All Colours)</Text>

            <View style={styles.priceRow}>
                <Text style={styles.price}>$500</Text>
                <Text style={styles.discount}>50% OFF</Text>
            </View>

            <Text style={styles.detailsTitle}>Product Details</Text>
            <Text style={styles.description}>
                These stylish sneakers are made from original leather with premium quality stitching.
                Comfortable for both running and casual wear. Limited time offer!
            </Text>

            <TouchableOpacity style={styles.RejectButton}>
                <Text style={styles.RejectButtonText}>Reject</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Buy Now</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    productImage: {
        width: '100%',
        height: width * 0.9,
        borderRadius: 12,
        marginBottom: 16,
    },
    sizeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 12,
    },
    sizeButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        marginRight: 8,
        marginBottom: 8,
    },
    sizeText: {
        fontSize: 14,
        color: '#333',
    },
    productTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    subTitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    price: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
        marginRight: 10,
    },
    discount: {
        fontSize: 14,
        color: 'red',
    },
    detailsTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: '#444',
        marginBottom: 20,
    },
    RejectButton: {
        backgroundColor: 'red',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buyButton: {
        backgroundColor: '#00C853',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    RejectButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buyButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProductDetailScreen;