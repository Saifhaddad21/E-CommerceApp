import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../styles/colors';

const { width } = Dimensions.get('window');

export default function TitleField({ title }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: width * 0.05,
        paddingVertical: width * 0.02,
    },
    title: {
        fontWeight: 700,
        color: COLORS.text.primary,
        fontSize: 36,
        width: 203,
        lineHeight: 43,
        marginBottom: 20
    }
})