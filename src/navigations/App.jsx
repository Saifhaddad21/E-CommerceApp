
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screen/App/SplashScreen';
import CheckoutScreen from '../screen/App/CheckoutScreen';
import OnboardingScreen from '../screen/App/OnboardingScreen';
import PaymentSuccessScreen from '../screen/App/PaymentSuccessScreen';
import ProductDetailScreen from '../screen/App/ProductDetailScreen';
import ProfileScreen from '../screen/App/ProfileScreen';

const Stack = createNativeStackNavigator();

const AppNav = () => {
    return (
        <Stack.Navigator initialRouteName='ProfileScreen'>
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ChecoutScreen"
                component={CheckoutScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="OnbordingScreen"
                component={OnboardingScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PaymentSuccessScreen"
                component={PaymentSuccessScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ProductDetailScreen"
                component={ProductDetailScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};

export default AppNav;