import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const Header = ({ title, onBackPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
                <ChevronLeft size={SIZES.iconMd} color={COLORS.text.primary} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.placeholder} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: SIZES.padding.md,
        marginBottom: SIZES.margin.lg,
    },
    backButton: {
        padding: SIZES.padding.xs,
    },
    title: {
        fontSize: SIZES.xLarge,
        fontWeight: 'bold',
        color: COLORS.text.primary,
    },
    placeholder: {
        width: SIZES.iconMd + 2 * SIZES.padding.xs,
    },
});

export default Header; 