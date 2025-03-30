import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SkipButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.skip} onPress={onPress}>
            <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
    );
};

export default SkipButton;

const styles = StyleSheet.create({
    skip: {
        position: 'absolute',
        top: 50,
        right: 20,
        zIndex: 1,
    },
    skipText: {
        fontSize: 16,
        color: '#666',
    },
}); 