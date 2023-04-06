import React from 'react';
import {Button} from 'react-native';
import {useTranslation} from 'react-i18next';

const ChangeLanguageButton = () => {
  const {i18n} = useTranslation();

  const changeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'fr' : 'en'; // toggle between 'en' and 'fr'
    i18n.changeLanguage(newLanguage);
  };

  return <Button title={i18n.language} onPress={changeLanguage} />;
};

export default ChangeLanguageButton;
