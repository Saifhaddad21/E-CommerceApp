import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CoverScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("SplashScreen");
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={require("../assets/images/logo.png")} style={styles.logo} />
            <Text style={styles.title}>Stylish</Text>
            <Text style={styles.subtitle}>E-Commerce</Text>
            <Text style={styles.subtitle}>UI Kit</Text>
            <Text style={styles.smallText}>20+ Screens</Text>
            <Image source={require("../assets/images/logofigma.png")} style={styles.logofigma} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFDCE0",
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    logofigma: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#D72638",
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "600",
        color: "#000",
    },
    smallText: {
        fontSize: 16,
        color: "#555",
        marginTop: 10,
    },
});

export default CoverScreen;
