import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';
import InputField from '../../components/auth/InputField';
import PasswordField from '../../components/auth/PasswordField';
import AuthButton from '../../components/auth/AuthButton';
import SocialButtonsRow from '../../components/auth/SocialButtonsRow';
import TitleField from '../../components/auth/TitleField';
import Layout from '../../components/auth/Layout';

const { width } = Dimensions.get('window');

const SignUpScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleCreateAccount = () => {
        console.log('Creating account with:', { username, password, confirmPassword });
        // Handle account creation logic
    };

    const handleLogin = () => {
        navigation.navigate('SignInScreen');
    };

    const handleSocialSignUp = (provider) => {
        console.log(`Sign up with ${provider}`);
        // Handle social sign up
    };

    return (
        <Layout>
            <TitleField title={"Create an account"} />

            <InputField
                type="user"
                placeholder="Username or Email"
                value={username}
                onChangeText={setUsername}
            />


            <InputField
                type="password"
                placeholder="Password"
                value={username}
                onChangeText={setUsername}
            />


            <InputField
                type="password"
                placeholder="ConfirmPassword"
                value={username}
                onChangeText={setUsername}
            />


            <Text style={styles.termsText}>

            </Text>
            <Text style={styles.noteText}>
                By clicking the <Text style={styles.asterisk}>Register</Text> button, you agree to the public offer
            </Text>

            <AuthButton title="Create Account" onPress={handleCreateAccount} />

            <SocialButtonsRow navigation={navigation} goTo="SignInScreen" text1={"I Already Have an Account"} text2={"Login"} />


        </Layout>
    );
};

const styles = StyleSheet.create({
    termsText: {
        fontSize: SIZES.small,
        color: COLORS.text.secondary,
    },
    noteText: {
        fontSize: SIZES.small,
        color: COLORS.text.secondary,
        marginBottom: SIZES.margin.lg,
        width: width * 0.85,
        paddingHorizontal: SIZES.paddingContaine.text,
        marginBottom: 20
    },
    asterisk: {
        color: '#FF4B26',
        fontSize: SIZES.small,
    },

});

export default SignUpScreen;