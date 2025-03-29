import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const PasswordField = ({ placeholder, icon = "lock", onChangeText, value }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.inputContainer}>
            <Icon name={icon} size={20} color="#7D7D7D" />
            <TextInput
                placeholder={placeholder}
                secureTextEntry={!showPassword}
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon name={showPassword ? "eye-slash" : "eye"} size={20} color="#7D7D7D" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: SIZES.borderRadius.md,
        paddingHorizontal: SIZES.padding.md,
        backgroundColor: COLORS.inputBackground,
        height: 50,
        marginBottom: SIZES.margin.md,
    },
    input: {
        flex: 1,
        marginLeft: SIZES.margin.sm,
        fontSize: SIZES.medium,
        color: COLORS.text.primary,
    },
});

export default PasswordField; 