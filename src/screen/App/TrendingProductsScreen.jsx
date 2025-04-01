import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { COLORS } from '../../styles/colors';

// Components
import Header from '../../components/trending/Header';
import SearchBar from '../../components/trending/SearchBar';
import ProductHeader from '../../components/trending/ProductHeader';
import ProductGrid from '../../components/trending/ProductGrid';

// Data
import { trendingProducts } from '../../data/trendingProducts';

const TrendingProductsScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('home');
    const [products] = useState(trendingProducts);

    const handleProductPress = (productId) => {
        navigation.navigate('ProductDetailsScreen');
    };

    const handleTabPress = (tabId) => {
        setActiveTab(tabId);
        // Handle tab navigation
        console.log(`Tab ${tabId} pressed`);
    };

    const handleSortPress = () => {
        // Show sort options
        console.log('Sort pressed');
    };

    const handleFilterPress = () => {
        // Show filter options
        console.log('Filter pressed');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />

            <View style={styles.container}>
                <Header />
                <SearchBar />

                <ProductHeader
                    itemCount="52,082"
                    onSortPress={handleSortPress}
                    onFilterPress={handleFilterPress}
                />

                <ProductGrid
                    products={products}
                    onProductPress={handleProductPress}
                />

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
});

export default TrendingProductsScreen; 