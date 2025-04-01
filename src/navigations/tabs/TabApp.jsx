import React from 'react';
import { StyleSheet, Dimensions, View as RNView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faHeart, faCartShopping, faSearch, faGear } from '@fortawesome/free-solid-svg-icons';
import { COLORS } from '../../styles/colors';
import HomeScreen from '../../screen/App/HomeScreen';
import SearchScreen from '../../screen/App/SearchScreen';
import SettingScreen from '../../screen/App/SettingScreen';
import TrendingProductsScreen from '../../screen/App/TrendingProductsScreen';
import ProductDetailsScreen from '../../screen/App/ProductDetailsScreen';

const { width } = Dimensions.get('window');

const Tab = createBottomTabNavigator();

export default function TabApp() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: COLORS.nav.primary,
                tabBarInactiveTintColor: '#000000',
                tabBarLabelStyle: styles.tabBarLabel,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesomeIcon icon={faHome} size={width * 0.06} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Wishlist"
                component={TrendingProductsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesomeIcon icon={faHeart} size={width * 0.06} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={ProductDetailsScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <RNView style={[
                            styles.containerCart,
                            focused && styles.containerCartActive
                        ]}>
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                size={width * 0.06}
                                color={focused ? '#FFFFFF' : '#000'}
                            />
                        </RNView>
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesomeIcon icon={faSearch} size={width * 0.06} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesomeIcon icon={faGear} size={width * 0.06} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 0,
        left: width * 0.05,
        right: width * 0.05,
        elevation: 0,
        backgroundColor: '#fff',
        borderRadius: 15,
        height: width * 0.2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        paddingBottom: 0,
    },
    tabBarLabel: {
        fontSize: width * 0.03,
        marginBottom: width * 0.02,
    },
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