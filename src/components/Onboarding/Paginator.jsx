// components/Paginator.js
import React from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Paginator = ({ data, scrollX }) => {
    return (
        <View style={styles.container}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [8, 18, 8],
                    extrapolate: 'clamp',
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp',
                });

                return (
                    <Animated.View
                        key={i.toString()}
                        style={[
                            styles.dot,
                            { width: dotWidth, opacity }
                        ]}
                    />
                );
            })}
        </View>
    );
};

export default Paginator;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
    },
    dot: {
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ff3d5a',
        marginHorizontal: 4,
    },
});