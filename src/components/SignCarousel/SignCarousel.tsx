import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {Dimensions, View} from 'react-native';
import MyText from '../Text/Text';

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
          }}>
          <MyText style={{textAlign: 'center', fontSize: 30}}>{item}</MyText>
        </View>
      )}
    />
  );
}

export default SignCarousel;
