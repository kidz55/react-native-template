import React from 'react';
import {View, StyleSheet} from 'react-native';
import ThemeContext from '../../Theme/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  const theme = React.useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });

  return <View style={styles.container}>{children}</View>;
};

export default Layout;
