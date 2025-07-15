import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type BoxProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function Box({ style, lightColor, darkColor, ...otherProps }: BoxProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
