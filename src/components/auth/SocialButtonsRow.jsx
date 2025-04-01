import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SocialButton from './SocialButton';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';
import { socialProviders } from '../../data/socialProviders';

const SocialButtonsRow = ({ navigation, onPressSocial, text1, text2, goTo }) => {

    const handleNext = () => {
        navigation.navigate(goTo)
    }
    return (
        <View style={styles.container}>
            <View style={styles.containeViewr}>
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
            <TouchableOpacity style={styles.footer} onPress={handleNext}>
                <Text style={styles.footerText} >{text1}</Text>
                <Text style={styles.signUpLink} >{text2}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 40,
        paddingHorizontal: 80
    },
    orText: {
        color: COLORS.text.secondary,
        fontSize: SIZES.medium,
        textAlign: 'center'
        // marginBottom: SIZES.margin.md,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20
    },
    footer: {
        marginTop: SIZES.margin.xl,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 7
    },
    footerText: {
        fontSize: SIZES.medium,
        color: COLORS.text.secondary,
        textAlign: 'center'
    },
    signUpLink: {
        color: COLORS.button.primary,
        textDecorationLine: 'underline',
        fontWeight: '600',
    },
});

export default SocialButtonsRow; 