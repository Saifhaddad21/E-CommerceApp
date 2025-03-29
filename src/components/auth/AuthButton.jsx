import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const AuthButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.borderRadius.md,
        paddingVertical: SIZES.padding.md,
        alignItems: 'center',
        marginVertical: SIZES.margin.md,
    },
    buttonText: {
        color: COLORS.text.white,
        fontSize: SIZES.large,
        fontWeight: 'bold',
    },
});

export default AuthButton; 