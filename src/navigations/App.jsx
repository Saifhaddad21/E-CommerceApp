
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import CheckoutScreen from '../screen/App/CheckoutScreen';
import Onboarding from '../screen/App/OnboardingScreen';
// import SignInScreen from '../screen/auth/SignInScreen';
// import SignUpScreen from '../screen/auth/SignUpScreen';
// import ForgotPasswordScreen from '../screen/auth/ForgotPasswordScreen';
// import HomeScreen from '../screen/App/HomeScreen';
// import PaymentSuccessScreen from '../screen/App/PaymentSuccessScreen';
// import ProductDetailScreen from '../screen/App/ProductDetailScreen';
// import ProfileScreen from '../screen/App/ProfileScreen';
// import TrendingProductsScreen from '../screen/App/TrendingProductsScreen';
import SplashScreen from '../screen/App/SplashScreen';

const Stack = createNativeStackNavigator();

const AppNav = () => {
    return (
        <Stack.Navigator initialRouteName='SplashScreen'>
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Onboarding"
                component={Onboarding}
                options={{ headerShown: false }}
            />
            {/* <Stack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ChecoutScreen"
                component={CheckoutScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ForgotPasswordScreen"
                component={ForgotPasswordScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
                name="PaymentSuccessScreen"
                component={PaymentSuccessScreen}
                options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
                name="ProductDetailScreen"
                component={ProductDetailScreen}
                options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
                name="TrendingProductsScreen"
                component={TrendingProductsScreen}
                options={{ headerShown: false }}
            /> */}


        </Stack.Navigator>
    );
};

export default AppNav;