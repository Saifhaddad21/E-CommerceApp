import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screen/App/SplashScreen';
import OnboardingScreen from '../screen/App/OnboardingScreen';
import SignInScreen from '../screen/auth/SignInScreen';
import SignUpScreen from '../screen/auth/SignUpScreen';
import ForgotPasswordScreen from '../screen/auth/ForgotPasswordScreen';
import HomeScreen from '../screen/App/HomeScreen';
import TrendingProductsScreen from '../screen/App/TrendingProductsScreen';
import TabApp from './tabs/TabApp';
import ProductDetailsScreen from '../screen/App/ProductDetailsScreen';

const Stack = createNativeStackNavigator();

const AppNav = () => {
    return (
        <Stack.Navigator initialRouteName='ProductDetailsScreen'>
            <Stack.Screen
                name="ProductDetailsScreen"
                component={ProductDetailsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="OnboardingScreen"
                component={OnboardingScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignInScreen"
                component={SignInScreen}
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
                name="TabApp"
                component={TabApp}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default AppNav;