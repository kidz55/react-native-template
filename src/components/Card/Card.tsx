import React from 'react';
import {View, ViewProps, StyleSheet} from 'react-native';
import ThemeContext from '../../Theme/ThemeContext';

type MyCardProps = ViewProps;

const MyCard: React.FC<MyCardProps> = ({children, ...props}) => {
  const theme = React.useContext(ThemeContext);

  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.colors.background,
      borderRadius: 10,
      padding: 16,
      shadowColor: theme.colors.shadow,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  });

  return (
    <View style={styles.card} {...props}>
      {children}
    </View>
  );
};

export default MyCard;
