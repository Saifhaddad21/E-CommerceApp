import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';
import InputField from '../../components/auth/InputField';
import PasswordField from '../../components/auth/PasswordField';
import AuthButton from '../../components/auth/AuthButton';
import SocialButtonsRow from '../../components/auth/SocialButtonsRow';

const SignUpScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleCreateAccount = () => {
        console.log('Creating account with:', { username, password, confirmPassword });
        // Handle account creation logic
    };

    const handleLogin = () => {
        navigation.navigate('SignIn');
    };

    const handleSocialSignUp = (provider) => {
        console.log(`Sign up with ${provider}`);
        // Handle social sign up
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Create an account</Text>

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

                <PasswordField
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                <Text style={styles.termsText}>
                    By clicking the Register button, you agree to the public offer
                </Text>

                <AuthButton title="Create Account" onPress={handleCreateAccount} />

                <SocialButtonsRow onPressSocial={handleSocialSignUp} />

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        I Already Have an Account{' '}
                        <Text style={styles.loginLink} onPress={handleLogin}>Login</Text>
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
    termsText: {
        fontSize: SIZES.small,
        color: COLORS.text.secondary,
        marginBottom: SIZES.margin.md,
    },
    footer: {
        marginTop: SIZES.margin.xl,
        alignItems: 'center',
    },
    footerText: {
        fontSize: SIZES.medium,
        color: COLORS.text.secondary,
    },
    loginLink: {
        color: COLORS.primary,
        fontWeight: '600',
    },
});

export default SignUpScreen;