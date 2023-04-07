import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {Dimensions, StyleSheet, View} from 'react-native';
import MyText from '../Text/Text';
import HoroscopeIcon from '../../assets/icons/HoroscopeIcon';

const astrologicalSigns = [
  'Aries',
  'Taurus',
  'Gemini',
  'Cancer',
  'Leo',
  'Virgo',
  'Libra',
  'Scorpio',
  'Sagittarius',
  'Capricorn',
  'Aquarius',
  'Pisces',
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
});

function SignCarousel({setCurrentSign}) {
  const width = Dimensions.get('window').width;
  return (
    <Carousel
      loop
      width={width}
      height={width / 4}
      autoPlay={false}
      data={astrologicalSigns}
      scrollAnimationDuration={500}
      onSnapToItem={index => setCurrentSign(astrologicalSigns[index])}
      renderItem={({item}) => (
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            justifyContent: 'center',
            backgroundColor: '#C8549D',
          }}>
          <MyText
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: 24,
              fontWeight: 'bold',
              textShadowColor: 'rgba(255, 255, 255, 0.5)',
              textShadowOffset: {width: 1, height: 1},
              textShadowRadius: 3,
            }}>
            {item}
          </MyText>
        </View>
      )}
    />
  );
}

export default SignCarousel;
