import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/paymentlogo.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Make Payment</Text>
      <Text style={styles.description}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit.
      </Text>
      <View style={styles.pagination}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text style={styles.prevText}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('NextScreen')}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp('5%'),
  },
  image: {
    width: wp('80%'),
    height: hp('30%'),
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: hp('2%'),
  },
  description: {
    fontSize: wp('4%'),
    textAlign: 'center',
    color: 'gray',
    marginTop: hp('1%'),
  },
  pagination: {
    flexDirection: 'row',
    marginTop: hp('3%'),
  },
  dot: {
    width: wp('2%'),
    height: wp('2%'),
    borderRadius: wp('1%'),
    backgroundColor: '#ccc',
    marginHorizontal: wp('1%'),
  },
  activeDot: {
    backgroundColor: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: hp('4%'),
  },
  prevText: {
    fontSize: wp('4%'),
    color: 'gray',
  },
  nextText: {
    fontSize: wp('4%'),
    color: 'red',
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;