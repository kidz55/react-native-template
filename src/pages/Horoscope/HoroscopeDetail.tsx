import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyText from '../../components/Text/Text';
import content from '../../../db_translated.json';
import {useTranslation} from 'react-i18next';

function HoroscopeDetail({sign, period}) {
  const {i18n} = useTranslation();
  const currentLang = i18n.language;
  return (
    <View key="0" style={styles.tabContent}>
      <MyText>{content[sign][period][currentLang]}</MyText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabContent: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HoroscopeDetail;
