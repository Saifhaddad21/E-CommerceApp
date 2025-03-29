// components/Paginator.js
import React from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Paginator = ({ data, scrollX }) => {
    return (
        <View style={{ flexDirection: 'row', height: 20 }}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [8, 16, 8],
                    extrapolate: 'clamp',
                });

                return (
                    <Animated.View
                        key={i.toString()}
                        style={[styles.dot, { width: dotWidth }]}
                    />
                );
            })}
        </View>
    );
};

export default Paginator;

const styles = StyleSheet.create({
    dot: {
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ff3d5a',
        marginHorizontal: 4,
    },
});