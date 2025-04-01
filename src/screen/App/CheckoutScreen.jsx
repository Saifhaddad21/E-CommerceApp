import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const CheckoutScreen = ({ navigation }) => {
    const [cartItems] = useState([
        {
            id: 1,
            image: require('../../assets/images/womens-casual.png'),
            title: "Women's Casual Wear",
            variations: ['Black', 'Red'],
            rating: 4.8,
            reviews: 245,
            price: 34.00,
            originalPrice: 54.00,
            quantity: 1,
        },
        {
            id: 2,
            image: require('../../assets/images/mens-jacket.png'),
            title: "Men's Jacket",
            variations: ['Green', 'Grey'],
            rating: 4.7,
            reviews: 153,
            price: 45.00,
            originalPrice: 77.00,
            quantity: 1,
        }
    ]);

    const handleBack = () => {
        navigation.goBack();
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Icon
                    key={i}
                    name={i <= rating ? 'star' : 'star-outline'}
                    size={12}
                    color="#FFD700"
                />
            );
        }
        return stars;
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack}>
                    <Icon name="chevron-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Checkout</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Delivery Address */}
                <View style={styles.addressContainer}>
                    <View style={styles.addressHeader}>
                        <View style={styles.addressTitleContainer}>
                            <Icon name="location-outline" size={20} color="#000" />
                            <Text style={styles.addressLabel}>Delivery Address</Text>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="add" size={24} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.address}>26, St Paul's Rd, London N1 2LL, UK</Text>
                    <Text style={styles.coordinates}>+44-7842392</Text>
                </View>

                {/* Shopping List */}
                <View style={styles.shoppingListContainer}>
                    <Text style={styles.sectionTitle}>Shopping List</Text>
                    {cartItems.map((item, index) => (
                        <View key={item.id} style={styles.cartItem}>
                            <Image source={item.image} style={styles.productImage} />
                            <View style={styles.productDetails}>
                                <Text style={styles.productTitle}>{item.title}</Text>
                                <View style={styles.variationsContainer}>
                                    <Text style={styles.variationsLabel}>Variations : </Text>
                                    {item.variations.map((variation, idx) => (
                                        <Text key={idx} style={styles.variationText}>
                                            {variation}{idx < item.variations.length - 1 ? ' / ' : ''}
                                        </Text>
                                    ))}
                                </View>
                                <View style={styles.ratingContainer}>
                                    <Text style={styles.rating}>{item.rating}</Text>
                                    <View style={styles.starsContainer}>
                                        {renderStars(Math.floor(item.rating))}
                                    </View>
                                    <Text style={styles.reviews}>({item.reviews})</Text>
                                </View>
                                <View style={styles.priceContainer}>
                                    <Text style={styles.price}>$ {item.price.toFixed(2)}</Text>
                                    <Text style={styles.originalPrice}>$ {item.originalPrice.toFixed(2)}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                    {cartItems.map((item, index) => (
                        <View key={`total-${item.id}`} style={styles.totalOrderContainer}>
                            <Text style={styles.totalOrderLabel}>Total Order ({index + 1}) :</Text>
                            <Text style={styles.totalOrderValue}>$ {item.price.toFixed(2)}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
    addressContainer: {
        backgroundColor: '#fff',
        padding: 16,
        marginTop: 8,
    },
    addressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    addressTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    addressLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000',
        marginLeft: 8,
        backgroundColor: '#FFE600',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    address: {
        fontSize: 14,
        color: '#000',
        marginBottom: 4,
    },
    coordinates: {
        fontSize: 12,
        color: '#666',
    },
    shoppingListContainer: {
        backgroundColor: '#fff',
        padding: 16,
        marginTop: 8,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginBottom: 16,
    },
    cartItem: {
        flexDirection: 'row',
        marginBottom: 16,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    productImage: {
        width: width * 0.25,
        height: width * 0.3,
        borderRadius: 8,
        marginRight: 12,
    },
    productDetails: {
        flex: 1,
    },
    productTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000',
        marginBottom: 8,
    },
    variationsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    variationsLabel: {
        fontSize: 12,
        color: '#666',
    },
    variationText: {
        fontSize: 12,
        color: '#000',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    rating: {
        fontSize: 12,
        color: '#000',
        marginRight: 4,
    },
    starsContainer: {
        flexDirection: 'row',
        marginRight: 4,
    },
    reviews: {
        fontSize: 12,
        color: '#666',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginRight: 8,
    },
    originalPrice: {
        fontSize: 14,
        color: '#666',
        textDecorationLine: 'line-through',
    },
    totalOrderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
    },
    totalOrderLabel: {
        fontSize: 14,
        color: '#666',
    },
    totalOrderValue: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000',
    },
});

export default CheckoutScreen;
