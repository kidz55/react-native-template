import React from 'react';
import {SafeAreaView} from 'react-native';
import MyCard from '../../components/Card/Card';
import MyText from '../../components/Text/Text';

function SettingsScreen() {
  return (
    <SafeAreaView>
      <MyCard>
        <MyText variant="title">SETTINGS</MyText>
        <MyText variant="body">this is the settings page</MyText>
      </MyCard>
    </SafeAreaView>
  );
}

export default SettingsScreen;
