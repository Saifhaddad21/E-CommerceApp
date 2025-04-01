import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';
import { faEnvelope, faEye, faLock, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const { width } = Dimensions.get('window');

const InputField = ({
    type,
    placeholder,
    secureTextEntry = false,
    onChangeText,
    value
}) => {

    const iconMap = {
        user: faUser,
        password: faLock,
        email: faEnvelope,
        search: faSearch
    };
    const iconToUse = type && iconMap[type.toLowerCase()] ? iconMap[type.toLowerCase()] : faUser;

    return (
        <View style={styles.container}>
            <View style={styles.inputGroup}>
                <FontAwesomeIcon
                    icon={iconToUse}
                    size={width * 0.04}
                    color={COLORS.input.icon}
                    style={styles.icon}
                />
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="#676767"
                    secureTextEntry={secureTextEntry}
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={value}
                />
                {type === 'password' && (
                    <FontAwesomeIcon
                        icon={faEye}
                        size={width * 0.04}
                        color={COLORS.input.icon}
                        style={styles.icon}
                    />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: width * 0.05,
        paddingVertical: width * 0.02,
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.input.border,
        borderRadius: SIZES.borderRadius.md,
        backgroundColor: COLORS.input.primary,
        height: width * 0.15,
        paddingHorizontal: width * 0.03,
    },
    icon: {
        marginHorizontal: width * 0.02,
    },
    input: {
        flex: 1,
        fontSize: width * 0.04,
        color: COLORS.text.primary,
        paddingVertical: width * 0.02,
    },
});

export default InputField;
