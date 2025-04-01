import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CheckoutProfileScreen from '../../screen/App/CheckoutProfileScreen';

const { width } = Dimensions.get('window');

const DeliveryAddress = ({ navigation }) => {
    const cartItems = [
        {
            id: 1,
            title: "Women's Casual Wear",
            image: require('../../assets/images/womancasual.png'),
            variations: ['Black', 'Red'],
            rating: 4.8,
            reviews: 245,
            price: 34.00,
            originalPrice: 54.00
        },
        {
            id: 2,
            title: "Men's Jacket",
            image: require('../../assets/images/menjacket.png'),
            variations: ['Green', 'Grey'],
            rating: 4.7,
            reviews: 153,
            price: 45.00,
            originalPrice: 77.00
        }
    ];

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
                    style={{ marginRight: 2 }}
                />
            );
        }
        return stars;
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack}>

                </TouchableOpacity>
                <Text style={styles.headerTitle}>Checkout</Text>
                <View style={styles.headerRight} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Delivery Address Section */}
                <View style={styles.addressSection}>
                    <View style={styles.addressHeader}>
                        <View style={styles.addressTitleContainer}>
                            <View style={styles.deliveryAddressLabel}>
                                <Image
                                    source={require('../../assets/icons/location.png')}
                                />
                                <Text style={styles.deliveryAddressText}>Delivery Address</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="add" size={24} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.address}>26, St Paul's Rd, London N1 2LL, UK</Text>
                    <Text style={styles.phone}>+44-7842392</Text>
                </View>

                {/* Shopping List Section */}
                <View style={styles.shoppingListSection}>
                    <Text style={styles.sectionTitle}>Shopping List</Text>
                    {cartItems.map((item, index) => (
                        <View key={item.id}>
                            <View style={styles.productCard}>
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
                            <View style={styles.totalOrderContainer}>
                                <Text style={styles.totalOrderLabel}>Total Order ({index + 1}) :</Text>
                                <Text style={styles.totalOrderValue}>$ {item.price.toFixed(2)}</Text>
                            </View>
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
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F5F5F5',
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    headerRight: {
        width: 24,
    },
    addressSection: {
        padding: 16,
        backgroundColor: '#fff',
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
    deliveryAddressLabel: {
        backgroundColor: '#FFE600',
        borderRadius: 4,
        marginLeft: 8,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    deliveryAddressText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000',
    },
    address: {
        fontSize: 14,
        color: '#000',
        marginBottom: 4,
    },
    phone: {
        fontSize: 12,
        color: '#666',
    },
    shoppingListSection: {
        padding: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginBottom: 16,
    },
    productCard: {
        flexDirection: 'row',
        marginBottom: 16,
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
        paddingVertical: 12,
        borderTopWidth: 1,
        borderTopColor: '#F5F5F5',
        marginBottom: 16,
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

export default DeliveryAddress; 