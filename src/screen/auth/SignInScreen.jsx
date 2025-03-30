import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';
import InputField from '../../components/auth/InputField';
import PasswordField from '../../components/auth/PasswordField';
import AuthButton from '../../components/auth/AuthButton';
import SocialButtonsRow from '../../components/auth/SocialButtonsRow';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import SignUpScreen from './SignUpScreen';

const SignInScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login with:', { username, password });
        // Handle login logic
    };

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    };

    const handleSignUp = () => {
        navigation.navigate('SignUp');
    };

    const handleSocialLogin = (provider) => {
        console.log(`Login with ${provider}`);
        // Handle social login
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome Back!</Text>

                <InputField
                    icon="user"
                    placeholder="Username or Email"
                    value={username}
                    onChangeText={setUsername}
                />

                <PasswordField
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.forgotPasswordLink} onPress={ForgotPasswordScreen}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>

                <AuthButton title="Login" onPress={SignInScreen} />

                <SocialButtonsRow onPressSocial={handleSocialLogin} />

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Create An Account{' '}
                        <Text style={styles.signUpLink} onPress={SignUpScreen}>Sign Up</Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    content: {
        flex: 1,
        padding: SIZES.padding.lg,
        justifyContent: 'center',
    },
    title: {
        fontSize: SIZES.xxxLarge,
        fontWeight: 'bold',
        marginBottom: SIZES.margin.xl,
        color: COLORS.text.primary,
    },
    forgotPasswordLink: {
        alignSelf: 'flex-end',
        marginBottom: SIZES.margin.md,
    },
    forgotPasswordText: {
        color: COLORS.primary,
        fontSize: SIZES.small,
    },
    footer: {
        marginTop: SIZES.margin.xl,
        alignItems: 'center',
    },
    footerText: {
        fontSize: SIZES.medium,
        color: COLORS.text.secondary,
    },
    signUpLink: {
        color: COLORS.primary,
        fontWeight: '600',
    },
});

export default SignInScreen;