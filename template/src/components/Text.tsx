/*
 * Created: Friday, February 21st 2025, 2:07:34 am
 * Author: Melvin Isican (mj.isican.dev@gmail.com)
 * -------------------------------
 * Last Modified: Friday, February 21st 2025, 2:10:52 am
 * Modified By: Melvin Isican (mj.isican.dev@gmail.com)
 */

import React from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';

export type TextMode = 'h1' | 'h2' | 'paragraph';

export interface CustomTextProps extends TextProps {
  mode?: TextMode;
}

const modeStyles = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  h2: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 8,
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 6,
  },
});

const Text: React.FC<CustomTextProps> = ({
  mode = 'paragraph',
  style,
  children,
  ...rest
}) => {
  return (
    <RNText style={[modeStyles[mode], style]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
