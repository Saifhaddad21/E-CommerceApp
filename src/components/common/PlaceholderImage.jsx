import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';

const PlaceholderImage = ({ width = 150, height = 150 }) => {
    return (
        <View
            style={[
                styles.placeholder,
                { width, height }
            ]}
        />
    );
};

const styles = StyleSheet.create({
    placeholder: {
        backgroundColor: COLORS.border,
        borderRadius: 8,
    },
});

export default PlaceholderImage; 