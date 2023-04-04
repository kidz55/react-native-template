import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ThemeContext from './src/Theme/ThemeContext';
import theme from './src/Theme/theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HoroscopeScreen from './src/pages/Horoscope/Horoscope';
import SettingsScreen from './src/pages/Settings/Settings';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Horoscope" component={HoroscopeScreen} />
      <Tab.Screen name="Tarot" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <ThemeContext.Provider value={theme}>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </ThemeContext.Provider>
    </NavigationContainer>
  );
}

export default App;
