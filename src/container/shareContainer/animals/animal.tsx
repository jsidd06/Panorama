import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HeaderComp, SearchComp} from '@/components';
import {Layout} from '@/themes/style';
import {COLORS} from '@/themes/Colors';

const AnimalScreen = () => {
  return (
    <View style={[Layout.fillB]}>
      <HeaderComp title="Animal" />
      {/* <SearchComp
        placeholderTextColor={COLORS.BLACK}
        inputStyle={{borderWidth: 1, height: 40, color: COLORS.BLACK}}
        textStyle={{color: COLORS.BLACK}}
      /> */}
    </View>
  );
};

export default AnimalScreen;

const styles = StyleSheet.create({});
