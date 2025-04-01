// screens/ForgotPasswordScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';
import InputField from '../../components/auth/InputField';
import AuthButton from '../../components/auth/AuthButton';
import TitleField from '../../components/auth/TitleField';
import Layout from '../../components/auth/Layout';
import BackStepIcon from '../../components/BackStep';

const { width } = Dimensions.get('window');

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        console.log('Reset password for:', email);
        // Handle password reset logic
    };

    const handleSignin = () => {
        navigation.navigate('SignInScreen');
    }

    return (
        <>
            <BackStepIcon onPress1={handleSignin} />
            <Layout>
                <TitleField title={"Forgot password?"} />

                <InputField
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.noteText}>
                    <Text style={styles.asterisk}>*</Text> We will send you a message to set or reset your new password
                </Text>

                <AuthButton title="Submit" onPress={handleSubmit} />
            </Layout>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    content: {
        flex: 1,
        paddingVertical: SIZES.paddingContaine.ver,
        paddingHorizontal: SIZES.paddingContaine.hor,
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: SIZES.xxxLarge,
        fontWeight: 'bold',
        marginBottom: SIZES.margin.xl,
        color: COLORS.text.primary,
    },
    noteText: {
        fontSize: SIZES.small,
        color: COLORS.text.secondary,
        marginBottom: SIZES.margin.lg,
        width: width * 0.75,
        paddingHorizontal: SIZES.paddingContaine.text,
        marginTop: 20,
        marginBottom: 20
    },
    asterisk: {
        color: '#FF4B26',
        fontSize: SIZES.small,
    },
});

export default ForgotPasswordScreen;