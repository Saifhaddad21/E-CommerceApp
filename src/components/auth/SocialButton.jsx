import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const SocialButton = ({ provider, onPress }) => {
    const getProviderIcon = () => {
        switch (provider) {
            case 'google':
                return 'google';
            case 'apple':
                return 'apple';
            case 'facebook':
                return 'facebook';
            default:
                return 'question';
        }
    };

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Icon name={getProviderIcon()} size={24} color={getProviderIcon() == 'facebook' ? "#3D4DA6" : "#333"} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: COLORS.button.primary,
        backgroundColor: COLORS.button.bg,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
        // marginHorizontal: SIZES.margin.sm,
    },
});

export default SocialButton; 