import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/icons/search2.png')}
                style={styles.searchIcon}
            />
            <TextInput
                style={styles.input}
                placeholder="Search any Product..."
                placeholderTextColor={COLORS.text.light}
            />
            <Image
                source={require('../../assets/icons/microphone.png')}
                style={styles.micIcon}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.lightGray,
        borderRadius: SIZES.radius,
        paddingHorizontal: 12,
        marginHorizontal: 15,
        marginBottom: 15,
        height: 40,
    },
    searchIcon: {
        width: 16,
        height: 16,
        tintColor: COLORS.text.secondary,
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: SIZES.medium,
        color: COLORS.text.primary,
        height: '100%',
    },
    micIcon: {
        width: 16,
        height: 16,
        tintColor: COLORS.text.secondary,
    },
});

export default SearchBar; 