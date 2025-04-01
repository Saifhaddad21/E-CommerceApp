// screens/Onboarding.js
import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import OnboardingItem from '../../components/Onboarding/OnboardingItem';
import Paginator from '../../components/Onboarding/Paginator';
import { slides } from '../../data/OnboardingSlides';

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log('Get Started pressed!');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skip} onPress={() => console.log('Skipped')}>
        <Text onPress={() => navigation.navigate('SignInScreen')} style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={slidesRef}
      />

      <View style={styles.footer}>
        <Paginator data={slides} scrollX={scrollX} />
        <TouchableOpacity
          onPress={() => navigation.navigate('SignInScreen')}
          style={styles.nextBtn}>
          <Text style={styles.nextText} >
            {currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  skip: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1,
  },
  skipText: {
    fontSize: 16,
    color: '#666',
  },
  footer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  nextBtn: {
    marginTop: 20,
    paddingHorizontal: 30,
    paddingVertical: 12,
    backgroundColor: '#ff3d5a',
    borderRadius: 25,
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
  },
});