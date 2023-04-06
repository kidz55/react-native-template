import React, {useState} from 'react';
import MyCard from '../../components/Card/Card';
import Layout from '../../components/Layout/Layout';
import SignCarousel from '../../components/SignCarousel/SignCarousel';
import MyText from '../../components/Text/Text';

function CompatibilityScreen() {
  const [currentSign, setCurrentSign] = useState('Aries');
  const [otherSign, setOtherSign] = useState('Aries');
  return (
    <Layout>
      <SignCarousel setCurrentSign={setCurrentSign} />
      <SignCarousel setCurrentSign={setOtherSign} />
      <MyCard>
        <MyText variant="title">Compatibility</MyText>
        <MyText variant="body">{currentSign}</MyText>
        <MyText variant="body">{otherSign}</MyText>
      </MyCard>
    </Layout>
  );
}

export default CompatibilityScreen;
