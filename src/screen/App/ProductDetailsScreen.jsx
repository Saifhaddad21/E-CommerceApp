import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderIcons from '../../components/BackStep'
import { Image } from 'react-native-svg'
import Layout from '../../components/auth/Layout'

const ProductDetailsScreen = ({ navigation }) => {

  const handleBack = () => {
    navigation.navigate('Home');
  }
  const handleStore = () => {
    navigation.navigate('TrendingProductsScreen');
  }
  return (
    <>
      <HeaderIcons onPress1={handleBack} HeartIcon={true} showText={false} StoreIcon={false} onPress2={handleStore} />
      <Layout>
        <TouchableOpacity style={styles.actionIcon}>
          <Image
            source={require('../../assets/images/nikeShoes.png')}

          />
        </TouchableOpacity>
      </Layout>
    </>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
  actionIcon: {
    width: 16,
    height: 16,
  },
})

