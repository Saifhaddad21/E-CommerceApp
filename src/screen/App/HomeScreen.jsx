// screens/HomeScreen.jsx
import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { COLORS } from '../../styles/colors';

// Components
import Header from '../../components/home/Header';
import SearchBar from '../../components/home/SearchBar';
import FilterHeader from '../../components/home/FilterHeader';
import Categories from '../../components/home/Categories';
import PromotionBanner from '../../components/home/PromotionBanner';
import DealOfTheDay from '../../components/home/DealOfTheDay';
import ProductList from '../../components/home/ProductList';
import SpecialOffers from '../../components/home/SpecialOffers';
import CategoryBanner from '../../components/home/CategoryBanner';
import SectionHeader from '../../components/home/SectionHeader';
import SummerSaleBanner from '../../components/home/SummerSaleBanner';

// Data
import { categories } from '../../data/categories';
import { dealProducts, trendingProducts, newArrivals, sponsored } from '../../data/products';
import { mainBanner, categoryBanner, summerSaleBanner } from '../../data/promotions';

const HomeScreen = () => {
    const handleViewAll = () => {
        console.log("View all pressed");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

            <View style={styles.container}>
                <Header />
                <SearchBar />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <FilterHeader />
                    <Categories categories={categories} />
                    <PromotionBanner banner={mainBanner} />
                    <DealOfTheDay onViewAll={handleViewAll} />
                    <ProductList products={dealProducts} />
                    <SpecialOffers />
                    <CategoryBanner banner={categoryBanner} />
                    <SectionHeader title="Trending Products" onViewAll={handleViewAll} />
                    <ProductList products={trendingProducts} />
                    <SummerSaleBanner banner={summerSaleBanner} />
                    <SectionHeader title="New Arrivals" onViewAll={handleViewAll} />
                    <SectionHeader title="Sponsored" />
                </ScrollView>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
});

export default HomeScreen;