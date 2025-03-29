// screens/ForgotPasswordScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';
import InputField from '../../components/auth/InputField';
import AuthButton from '../../components/auth/AuthButton';

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        console.log('Reset password for:', email);
        // Handle password reset logic
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Forgot password?</Text>

                <InputField
                    icon="envelope"
                    placeholder="Enter your email address"
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.noteText}>
                    * We will send you a message to set or reset your new password
                </Text>

                <AuthButton title="Submit" onPress={handleSubmit} />
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
    noteText: {
        fontSize: SIZES.small,
        color: COLORS.text.secondary,
        marginBottom: SIZES.margin.lg,
    },
});

export default ForgotPasswordScreen;