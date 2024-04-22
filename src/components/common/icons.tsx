import React from 'react';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconProps {
  name: string;
  size: number;
  color?: string;
  style?: any;
}

const IconsComp: React.FC<IconProps> = ({
  name,
  size,
  color = 'black',
  style,
}) => {
  const iconProps = {
    name,
    size,
    color,
    style,
  };
  const IconComponent = MaterialCommunityIcons;

  return (
    <View>
      <IconComponent {...iconProps} />
    </View>
  );
};

export default IconsComp;
