import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SocialButton from './SocialButton';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const SocialButtonsRow = ({ onPressSocial }) => {
    const socialProviders = ['google', 'apple', 'facebook'];

    return (
        <View style={styles.container}>
            <Text style={styles.orText}>- OR Continue with -</Text>
            <View style={styles.buttonsContainer}>
                {socialProviders.map((provider) => (
                    <SocialButton
                        key={provider}
                        provider={provider}
                        onPress={() => onPressSocial(provider)}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: SIZES.margin.lg,
    },
    orText: {
        color: COLORS.text.secondary,
        fontSize: SIZES.medium,
        marginBottom: SIZES.margin.md,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default SocialButtonsRow; 