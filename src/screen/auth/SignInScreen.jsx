import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';
import InputField from '../../components/auth/InputField';
import AuthButton from '../../components/auth/AuthButton';
import SocialButtonsRow from '../../components/auth/SocialButtonsRow';
import Layout from '../../components/auth/Layout';
import TitleField from '../../components/auth/TitleField';

const SignInScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate('TabApp');
    };

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPasswordScreen');
    };

    const handleSignUp = () => {
        navigation.navigate('SignUp');
    };

    const handleSocialLogin = (provider) => {
        console.log(`Login with ${provider}`);
        // Handle social login
    };

    return (
        <Layout>
            <TitleField title={"Welcome Back!"} />
            <InputField
                type="email"
                placeholder="Username or Email"
                value={username}
                onChangeText={setUsername}
            />
            <InputField
                type="password"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.forgotPasswordLink} onPress={handleForgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <AuthButton title="Login" onPress={handleLogin} />

            <SocialButtonsRow navigation={navigation} goTo="SignUpScreen" onPressSocial={handleSocialLogin} text1={"Create An Account"} text2={"Sign Up"} />


        </Layout>
    );
};

const styles = StyleSheet.create({
    forgotPasswordLink: {
        alignSelf: 'flex-end',
        marginBottom: SIZES.margin.xxl,
        marginTop: SIZES.margin.xl,
    },
    forgotPasswordText: {
        fontSize: SIZES.small,
        color: COLORS.button.primary,
        paddingHorizontal: SIZES.paddingContaine.text,
    },

});

export default SignInScreen;