import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const { width } = Dimensions.get('window');

const AuthButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.button.primary,
        borderRadius: SIZES.borderRadius.sm,
        fontSize: 20,
        fontWeight: 600,
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        width: width * 0.85,
        alignSelf: 'center',
    },
    buttonText: {
        color: COLORS.text.white,
        fontSize: SIZES.large,
        fontWeight: 'bold',
    },
});

export default AuthButton; 