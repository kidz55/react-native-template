import React from 'react';
import {Text, TextProps, StyleSheet} from 'react-native';
import ThemeContext from '../../Theme/ThemeContext';

type MyTextProps = TextProps & {
  variant?: 'body' | 'title';
};

const MyText: React.FC<MyTextProps> = ({
  children,
  variant = 'body',
  style,
  ...props
}) => {
  const theme = React.useContext(ThemeContext);
  const styles = StyleSheet.create({
    text: {
      fontSize: variant === 'title' ? 24 : theme.typography.fontSize,
      //@ts-ignore
      fontWeight: variant === 'title' ? 'bold' : theme.typography.fontWeight,
      fontFamily: theme.typography.fontFamily,
      color: theme.colors.text,
    },
  });
  return (
    <Text style={[styles.text].concat(style)} {...props}>
      {children}
    </Text>
  );
};

export default MyText;
