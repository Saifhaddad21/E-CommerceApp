import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import SplashScreen from './src/screen/App/SplashScreen';
// import OnboardingScreen from './src/screen/App/OnboardingScreen';
// import CheckoutScreen from './src/screen/App/CheckoutScreen';
// import PaymentSuccessScreen from './src/screen/App/PaymentSuccessScreen';
// import ProductDetailScreen from './src/screen/App/ProductDetailScreen';
// import ProfileScreen from './src/screen/App/ProfileScreen';
// import CoverScreen from './src/components/CoverComponent';
import AppNav from './src/navigations/App';
// import HomeScreen from './src/screen/App/HomeScreen';
// import TrendingProductsScreen from './src/screen/App/TrendingProductsScreen';

export default function App() {
  return (
    <NavigationContainer>
      {/* <CoverScreen/> */} 
    {/* <SplashScreen /> */}
    {/* <SplashScreen/> */}
    {/* <OnboardingScreen /> */}
    {/* <CheckoutScreen /> */}
    {/* <PaymentSuccessScreen/> */}
    {/* <ProductDetailScreen /> */}
    {/* <ProfileScreen /> */}
    <AppNav />
    {/* <HomeScreen /> */}
    {/* <TrendingProductsScreen /> */}

    </NavigationContainer>
  );
}