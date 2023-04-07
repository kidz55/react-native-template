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
    container: {},
    tab: {
      flex: 1,
      minWidth: 80,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 2,
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
    },
    tabText: {
      color: 'grey',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: 14,
    },
    activeTab: {
      borderBottomColor: theme.colors.text,
    },
    activeTabText: {
      color: theme.colors.text,
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
            <MyText
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}>
              {tab}
            </MyText>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default TabNavigation;
