import React, {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '@/themes/Colors';

type DefaultWrapperProps = {
  children: ReactNode;
  style?: any;
};
const DefaultWrapper = ({children, style}: DefaultWrapperProps) => {
  return (
    <LinearGradient colors={[COLORS.BROWN, COLORS.PINK]} style={style}>
      {children}
    </LinearGradient>
  );
};

export default DefaultWrapper;
