import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ThemeContext from '../../Theme/ThemeContext';
import MyText from '../Text/Text';

export interface TabNavigationProps {
  tabs: string[];
  activeTab: string;
  onTabPress: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  onTabPress,
}) => {
  const theme = React.useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      height: 48,
      backgroundColor: theme.colors.secondary,
    },
    tab: {
      flex: 1,
      paddingHorizontal: 10,
      minWidth: 80,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabText: {
      color: theme.colors.secondary,
      fontWeight: 'bold',
    },
    activeTab: {
      backgroundColor: theme.colors.background,
    },
    activeTabText: {
      color: theme.colors.primary,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => onTabPress(tab)}>
            <MyText style={[activeTab === tab && styles.activeTabText]}>
              {tab}
            </MyText>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default TabNavigation;
