import { StyleSheet, View as RNView, Dimensions } from 'react-native';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { COLORS } from '../../../styles/colors';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import TrendingProductsScreen from '../../../screen/App/TrendingProductsScreen';
import ProductDetailsScreen from '../../../screen/App/ProductDetailsScreen';

const { width } = Dimensions.get('window');
const Stack = createStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="TrendingProductsScreen"
                component={TrendingProductsScreen}
            />
            <Stack.Screen
                name="ProductDetailsScreen"
                component={ProductDetailsScreen}
            />
        </Stack.Navigator>
    )
}

export default CartStack;

const styles = StyleSheet.create({
    containerCart: {
        backgroundColor: '#FFFFFF',
        width: width * 0.18,
        height: width * 0.18,
        borderRadius: "50%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -width * 0.06,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    containerCartActive: {
        backgroundColor: COLORS.nav.primary,
    }
});