import React from 'react';
import {Text, TextProps, StyleSheet} from 'react-native';
import ThemeContext from '../../Theme/ThemeContext';

type MyTextProps = TextProps & {
  variant?: 'body' | 'title';
};

const MyText: React.FC<MyTextProps> = ({
  children,
  variant = 'body',
  ...props
}) => {
  const theme = React.useContext(ThemeContext);

  const styles = StyleSheet.create({
    text: {
      fontFamily: theme.typography.fontFamily,
      fontSize: variant === 'title' ? 24 : theme.typography.fontSize,
      //@ts-ignore
      fontWeight: variant === 'title' ? 'bold' : theme.typography.fontWeight,
      color: theme.colors.primary,
    },
  });

  return (
    <Text style={styles.text} {...props}>
      {children}
    </Text>
  );
};

export default MyText;
