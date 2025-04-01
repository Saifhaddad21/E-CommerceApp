import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, SafeAreaView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HeaderIcons from '../../components/BackStep'


import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const ProductDetailsScreen = ({ navigation }) => {
    const [selectedSize, setSelectedSize] = useState('7 UK');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleBack = () => {
        navigation.navigate('HomeScreen');
    }
    const handleStore = () => {
        navigation.navigate('TrendingProductsScreen');
    }

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            {/* Header */}
            <HeaderIcons onPress1={handleBack} HeartIcon={false} showText={false} StoreIcon={true} onPress2={handleStore} />

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Product Image Carousel */}
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/images/nikeShoes.png')} style={styles.image} />
                    <TouchableOpacity style={styles.nextButton}>
                        <Icon name="chevron-forward" size={24} color="#000" />
                    </TouchableOpacity>
                    <View style={styles.dotsContainer}>
                        {[0, 1, 2, 3, 4].map((index) => (
                            <View
                                key={index}
                                style={[
                                    styles.dot,
                                    index === currentImageIndex && styles.activeDot
                                ]}
                            />
                        ))}
                    </View>
                </View>

                {/* Size Selection */}
                <View style={styles.sizeContainer}>
                    <Text style={styles.sizeLabel}>Size: {selectedSize}</Text>
                    <View style={styles.sizeOptions}>
                        {['6 UK', '7 UK', '8 UK', '9 UK', '10 UK'].map((size) => (
                            <TouchableOpacity
                                key={size}
                                style={[
                                    styles.sizeBox,
                                    selectedSize === size && styles.selectedSizeBox
                                ]}
                                onPress={() => handleSizeSelect(size)}
                            >
                                <Text style={[
                                    styles.sizeText,
                                    selectedSize === size && styles.selectedSizeText
                                ]}>
                                    {size}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Product Details */}
                <View style={styles.detailsContainer}>
                    <Text style={styles.productTitle}>Nike Sneakers</Text>
                    <Text style={styles.productSubTitle}>Vision Alta Men's Shoes Size (All Colours)</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.rating}>⭐⭐⭐⭐⭐</Text>
                        <Text style={styles.ratingCount}>56,890</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.strikethrough}>$29.99</Text>
                        <Text style={styles.price}>$15.00</Text>
                        <Text style={styles.discount}>50% Off</Text>
                    </View>

                    <Text style={styles.sectionTitle}>Product Details</Text>
                    <Text style={styles.description}>
                        Renowned for its excellent performance and unparalleled "Chicago" colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. This 2019 release saw the return of...
                    </Text>

                    {/* Action Buttons */}
                    <View style={styles.actionButtonsContainer}>
                        <TouchableOpacity style={styles.secondaryActionButton}>
                            <Icon name="location-outline" size={18} color="#000" />
                            <Text style={styles.secondaryActionText}>Nearest Store</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.secondaryActionButton}>
                            <MaterialIcon name="local-shipping" size={18} color="#000" />
                            <Text style={styles.secondaryActionText}>Return policy</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Main Buttons */}
                    <View style={styles.mainButtonsContainer}>
                        <TouchableOpacity style={styles.button}>
                            <View style={styles.cartButton}>
                                <Icon name="shopping-cart" size={20} color="#fff" />
                            </View>
                            <Text style={styles.text}>Go to cart</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buyButton}>
                            <Text style={styles.buyButtonText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Delivery Info */}
                    <View style={styles.deliveryContainer}>
                        <Text style={styles.deliveryTitle}>Delivery in</Text>
                        <Text style={styles.deliveryTime}>1 within Hour</Text>
                    </View>

                    {/* View Similar and Compare */}
                    <View style={styles.actionLinksContainer}>
                        <TouchableOpacity style={styles.actionLink}>
                            <Icon name="eye-outline" size={18} color="#666" />
                            <Text style={styles.actionLinkText}>View Similar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.actionLink}>
                            <MaterialIcon name="compare-arrows" size={18} color="#666" />
                            <Text style={styles.actionLinkText}>Add to Compare</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Similar Products */}
                    <View style={styles.similarProductsContainer}>
                        <View style={styles.similarProductsHeader}>
                            <Text style={styles.similarProductsTitle}>Similar To</Text>
                            <Text style={styles.itemCount}>282+ Items</Text>

                            <View style={styles.sortFilterContainer}>
                                <TouchableOpacity style={styles.sortButton}>
                                    <Text style={styles.sortFilterText}>Sort</Text>
                                    <MaterialIcon name="arrow-drop-down" size={18} color="#000" />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.filterButton}>
                                    <Text style={styles.sortFilterText}>Filter</Text>
                                    <FontAwesome name="filter" size={14} color="#000" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={styles.similarProductsList}
                        >
                            {[1, 2].map((item) => (
                                <View key={item} style={styles.similarProductCard}>
                                    <Image
                                        source={require('../../assets/images/nikeShoes.png')}
                                        style={styles.similarProductImage}
                                    />
                                    <Text style={styles.similarProductTitle}>Nike Sneakers</Text>
                                    <Text style={styles.similarProductDesc}>Mid Reach Vision Shoes for</Text>
                                    <Text style={styles.similarProductDesc}>Men White Black Price S...</Text>
                                    <Text style={styles.similarProductPrice}>₹1000</Text>
                                    <View style={styles.similarProductActions}>
                                        <View style={styles.similarProductRating}>
                                            <Text style={{ color: '#FFB800' }}>⭐⭐⭐⭐⭐</Text>
                                        </View>
                                        <TouchableOpacity style={styles.similarProductCartButton}>
                                            <Icon name="cart-outline" size={20} color="#fff" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E5EFF',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    iconContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#327BFF',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    backButton: {
        padding: 5,
    },
    cartIconContainer: {
        padding: 5,
    },
    imageContainer: {
        alignItems: 'center',
        paddingVertical: 10,
        position: 'relative',
    },
    image: {
        width: width - 32,
        height: 180,
        borderRadius: 10
    },
    nextButton: {
        position: 'absolute',
        right: 20,
        top: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 15,
        padding: 5,
    },
    dotsContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ddd',
        marginHorizontal: 3,
    },
    activeDot: {
        backgroundColor: '#FF407D',
        width: 16,
    },
    sizeContainer: {
        paddingHorizontal: 16,
        marginTop: 5,
    },
    sizeLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    sizeOptions: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
    },
    sizeBox: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 5,
        minWidth: width / 6,
        alignItems: 'center',
        borderColor: '#FA7189',
    },
    selectedSizeBox: {
        borderColor: '#FF407D',
        backgroundColor: '#FFF0F5',
    },
    sizeText: {
        fontSize: 13,
        color: '#333',
    },
    selectedSizeText: {
        color: '#FF407D',
        fontWeight: 'bold',
    },
    detailsContainer: {
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    productTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
    },
    productSubTitle: {
        color: '#666',
        fontSize: 14,
        marginTop: 2,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    rating: {
        fontSize: 14,
    },
    ratingCount: {
        fontSize: 14,
        color: '#666',
        marginLeft: 5,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    strikethrough: {
        textDecorationLine: 'line-through',
        color: '#888',
        fontSize: 15,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 8,
    },
    discount: {
        color: '#FF407D',
        fontSize: 14,
        marginLeft: 8,
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
    },
    description: {
        color: '#666',
        fontSize: 13,
        lineHeight: 20,
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
    },
    secondaryActionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 15,
        justifyContent: 'center',
        width: '48%',
    },
    secondaryActionText: {
        fontSize: 12,
        marginLeft: 5,
        color: '#333',
    },
    mainButtonsContainer: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
    },
    cartButton: {
        backgroundColor: '#444BF8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 5,
        width: '48%',
    },
    cartButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 8,
    },
    buyButton: {
        backgroundColor: '#29CC97',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 5,
        width: '48%',
    },
    buyButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    deliveryContainer: {
        marginTop: 20,
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    deliveryTitle: {
        fontSize: 14,
        color: '#666',
    },
    deliveryTime: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 2,
    },
    actionLinksContainer: {
        flexDirection: 'row',
        marginTop: 20,
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    actionLink: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 25,
    },
    actionLinkText: {
        fontSize: 14,
        color: '#555',
        marginLeft: 8,
    },
    similarProductsContainer: {
        marginTop: 25,
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    similarProductsHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    similarProductsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemCount: {
        fontSize: 14,
        color: '#666',
        flex: 1,
        marginLeft: 10,
    },
    sortFilterContainer: {
        flexDirection: 'row',
    },
    sortButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sortFilterText: {
        fontSize: 14,
        marginRight: 3,
    },
    similarProductsList: {
        marginBottom: 20,
    },
    similarProductCard: {
        width: 150,
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 10,
        padding: 10,
    },
    similarProductImage: {
        width: '100%',
        height: 100,
        borderRadius: 5,
        marginBottom: 8,
    },
    similarProductTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    similarProductDesc: {
        fontSize: 12,
        color: '#666',
    },
    similarProductPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
    },
    similarProductActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    similarProductRating: {
        flexDirection: 'row',
    },
    similarProductCartButton: {
        backgroundColor: '#444BF8',
        padding: 5,
        borderRadius: 5,
    },
});