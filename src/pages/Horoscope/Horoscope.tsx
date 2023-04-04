import React from 'react';
import {SafeAreaView} from 'react-native';
import MyCard from '../../components/Card/Card';
import MyText from '../../components/Text/Text';

function HoroscopeScreen() {
  return (
    <SafeAreaView>
      <MyCard>
        <MyText variant="title">HOROSCOPE</MyText>
      </MyCard>
    </SafeAreaView>
  );
}

export default HoroscopeScreen;
