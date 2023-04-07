import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ThemeContext from './src/Theme/ThemeContext';
import theme from './src/Theme/theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HoroscopeScreen from './src/pages/Horoscope/Horoscope';
import {I18nextProvider, useTranslation} from 'react-i18next';
import i18n from './src/utils/i18n';
import ChangeLanguageButton from './src/components/ChangeLanguageBtn/ChangeLangBtn';
import CompatibilityScreen from './src/pages/Compatibility/Compatibility';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeScreen() {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: theme.colors.background,
        },
      })}>
      <Tab.Screen
        name={t('horoscope')}
        options={{
          headerRight: () => <ChangeLanguageButton />,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTintColor: '#fff',
        }}
        component={HoroscopeScreen}
      />
      <Tab.Screen
        name={t('compatibility')}
        options={{
          headerRight: () => <ChangeLanguageButton />,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTintColor: '#fff',
        }}
        component={CompatibilityScreen}
      />
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <ThemeContext.Provider value={theme}>
          <Stack.Navigator>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Home"
              component={HomeScreen}
            />
          </Stack.Navigator>
        </ThemeContext.Provider>
      </NavigationContainer>
    </I18nextProvider>
  );
}

export default App;
