import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, ImageBackground } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const { width } = Dimensions.get('window');

const PromotionBanner = ({ banner }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);

    const renderItem = ({ item }) => (
        <ImageBackground
            source={item.image}
            style={[styles.banner, { width: width - 30 }]}
            imageStyle={styles.backgroundImage}
        >
            <View style={[styles.overlay, { backgroundColor: `${item.backgroundColor}95` }]}>
                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                    <Text style={styles.description}>{item.description}</Text>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Shop Now</Text>
                        <Text style={styles.arrowIcon}>→</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / (width - 30));
        setActiveIndex(index);
    };

    const scrollToIndex = (index) => {
        flatListRef.current?.scrollToIndex({
            index,
            animated: true
        });
        setActiveIndex(index);
    };

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={banner}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                snapToInterval={width - 30}
                decelerationRate="fast"
                contentContainerStyle={styles.flatListContent}
            />

            <View style={styles.pagination}>
                {banner.map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => scrollToIndex(index)}
                        style={styles.dotContainer}
                    >
                        <View style={[
                            styles.dot,
                            activeIndex === index && styles.activeDot
                        ]} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    flatListContent: {
        paddingHorizontal: 15,
    },
    banner: {
        borderRadius: SIZES.radius,
        height: SIZES.bannerHeight,
        overflow: 'hidden',
        marginRight: 15,
    },
    backgroundImage: {
        resizeMode: 'cover',
        borderRadius: SIZES.radius,
    },
    overlay: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
    },
    content: {
        width: '70%', // Limit content width
    },
    title: {
        fontSize: SIZES.xlarge,
        fontWeight: 'bold',
        color: COLORS.white,
        marginBottom: 2,
    },
    subtitle: {
        fontSize: SIZES.small,
        color: COLORS.white,
        marginBottom: 2,
    },
    description: {
        fontSize: SIZES.small,
        color: COLORS.white,
        marginBottom: 10,
    },
    button: {
        backgroundColor: COLORS.white,
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: COLORS.text.primary,
        fontSize: SIZES.small,
        fontWeight: '500',
        marginRight: 3,
    },
    arrowIcon: {
        color: COLORS.text.primary,
        fontSize: SIZES.small,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    dotContainer: {
        padding: 5,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: COLORS.gray,
        marginHorizontal: 2,
    },
    activeDot: {
        width: 18,
        backgroundColor: COLORS.primary,
    },
});

export default PromotionBanner; 