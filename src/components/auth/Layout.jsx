// screens/ForgotPasswordScreen.js
import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { COLORS } from '../../styles/colors';

const { width } = Dimensions.get('window');

const Layout = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.content}>
                    {children}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        flexGrow: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: width * 0.05,
        paddingVertical: width * 0.03,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Layout;