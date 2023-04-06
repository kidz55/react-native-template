import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import SwipeableView from '../../components/SwipeableView/SwipeableView';
import HoroscopeDetail from './HoroscopeDetail';
import SignCarousel from '../../components/SignCarousel/SignCarousel';

const horoscopeTabs = ['yesterday', 'today', 'week', 'month', 'year'];

function HoroscopeScreen() {
  const [currentSign, setCurrentSign] = useState('Aries');

  return (
    <Layout>
      <SignCarousel setCurrentSign={setCurrentSign} />
      <SwipeableView tabs={horoscopeTabs}>
        {horoscopeTabs.map(period => (
          <HoroscopeDetail period={period} sign={currentSign} />
        ))}
      </SwipeableView>
    </Layout>
  );
}

export default HoroscopeScreen;
