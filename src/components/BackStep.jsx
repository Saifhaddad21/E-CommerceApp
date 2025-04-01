import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { faChevronLeft, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


export default function HeaderIcons({ onPress1, onPress2, showText, HeartIcon, StoreIcon }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress1} >
                <FontAwesomeIcon icon={faChevronLeft} size={24} color="black" />
            </TouchableOpacity>

            {StoreIcon && (<TouchableOpacity onPress={onPress2}>
                <FontAwesomeIcon icon={faShoppingCart} size={24} color="black" />
            </TouchableOpacity>)}

            {HeartIcon && (<TouchableOpacity>
                <FontAwesomeIcon icon={faHeart} size={24} color="black" />
            </TouchableOpacity>)}

            {showText && (<Text style={styles.textcart} >
                Checkout
            </Text>)}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    textcart: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0,
    }
})