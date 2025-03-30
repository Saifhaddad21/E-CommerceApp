import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList,
} from 'react-native';

const { width } = Dimensions.get('window');

// const featuredCategories = [
//     { title: 'Beauty', image: require('../../assets/icons/cosmetics.png') },
//     { title: 'Fashion', image: require('../../assets/icons/woman.png') },
//     { title: 'Kids', image: require('../../assets/icons/tshirt.png') },
//     { title: 'Mens', image: require('../../assets/icons/black.png') },
//     { title: 'Womens', image: require('../../assets/icons/woman-clothes.png') },
// ];

const products = [
    {
        title: 'Women Printed Kurta',
        image: require('../../assets/images/download.jpeg'),
        price: '$20',
    },
    {
        title: 'HRX by Hrithik',
        image: require('../../assets/images/download (1).jpeg'),
        price: '$50',
    },
];

const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Featured Categories */}
            <Text style={styles.header}>All Featured</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredScroll}>
                {featuredCategories.map((item, index) => (
                    <View key={index} style={styles.featuredItem}>
                        <Image source={item.image} style={styles.featuredImage} />
                        <Text style={styles.featuredText}>{item.title}</Text>
                    </View>
                ))}
            </ScrollView>

            {/* Promo Banner */}
            <View style={styles.promoBanner}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.promoTitle}>50-40% OFF</Text>
                    <Text style={styles.promoSubtitle}>Now in products, All colours</Text>
                    <TouchableOpacity style={styles.shopBtn}>
                        <Text style={styles.shopBtnText}>Shop Now</Text>
                    </TouchableOpacity>
                </View>
                <Image source={require('../../assets/images/womanstore.png')} style={styles.promoImage} />
            </View>

            {/* Deal of the Day */}
            <View style={styles.dealSection}>
                <Text style={styles.dealHeader}>Deal of the Day</Text>
                <Text style={styles.dealTimer}>⏳ 23h 55m 20s remaining</Text>
                <FlatList
                    horizontal
                    data={products}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.productCard}>
                            <Image source={item.image} style={styles.productImage} />
                            <Text style={styles.productTitle}>{item.title}</Text>
                            <Text style={styles.productPrice}>{item.price}</Text>
                        </View>
                    )}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 10,
    },
    header: {
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 16,
        marginBottom: 10,
    },
    featuredScroll: {
        paddingLeft: 16,
        marginBottom: 20,
    },
    featuredItem: {
        alignItems: 'center',
        marginRight: 20,
    },
    featuredImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    featuredText: {
        marginTop: 5,
        fontSize: 12,
        fontWeight: '500',
    },
    promoBanner: {
        flexDirection: 'row',
        backgroundColor: '#fce4ec',
        borderRadius: 10,
        marginHorizontal: 16,
        padding: 16,
        alignItems: 'center',
        marginBottom: 20,
    },
    promoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#d43f70',
    },
    promoSubtitle: {
        fontSize: 14,
        marginVertical: 4,
    },
    shopBtn: {
        backgroundColor: '#d43f70',
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 20,
        marginTop: 8,
        alignSelf: 'flex-start',
    },
    shopBtnText: {
        color: '#fff',
        fontWeight: '600',
    },
    promoImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginLeft: 10,
    },
    dealSection: {
        marginLeft: 16,
        marginBottom: 20,
    },
    dealHeader: {
        fontSize: 18,
        fontWeight: '600',
    },
    dealTimer: {
        fontSize: 14,
        color: '#888',
        marginVertical: 4,
    },
    productCard: {
        backgroundColor: '#f9f9f9',
        width: width * 0.45,
        borderRadius: 10,
        padding: 10,
        marginRight: 12,
    },
    productImage: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    productTitle: {
        fontSize: 14,
        marginTop: 8,
        fontWeight: '600',
    },
    productPrice: {
        fontSize: 13,
        color: '#d43f70',
        marginTop: 4,
    },
});

export default ProfileScreen;