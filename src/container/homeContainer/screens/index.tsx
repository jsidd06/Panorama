import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {IMAGES} from '@/themes/images';
import {DefaultWrapper} from '@/components';
import {COLORS} from '@/themes/Colors';
import HomeCardFrag from '../fragments/homeCardFrag';
import HomeListFrag from '../fragments/homeListFrag';

const HomeScreen = () => {
  const [isChanged, setIsChanged] = useState(false);
  const handleSubmit = () => {
    setIsChanged(!isChanged);
  };
  return (
    <DefaultWrapper style={styles.root}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image source={IMAGES.logo} style={styles.img} />
          <Text style={styles.heading}>Panorama</Text>
          <Pressable onPress={handleSubmit}>
            <Image
              source={isChanged ? IMAGES.list : IMAGES.grid}
              style={styles.img}
            />
          </Pressable>
        </View>
        <View style={styles.inputCtn}>
          <TextInput
            placeholder="Search.."
            placeholderTextColor={COLORS.BROWN}
            style={styles.input}
          />
        </View>
        {isChanged ? <HomeCardFrag /> : <HomeListFrag />}
      </View>
    </DefaultWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {flex: 1},
  container: {flex: 1, marginVertical: 15, marginHorizontal: 15},
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputCtn: {marginVertical: 15},
  input: {
    backgroundColor: COLORS.WHITE,
    height: 40,
    borderRadius: 4,
    paddingHorizontal: 10,
    color: COLORS.BLACK,
  },
  img: {width: 40, height: 40, resizeMode: 'contain'},
  heading: {
    fontSize: 22,
    color: COLORS.WHITE,
    fontWeight: '500',
  },
  list: {
    height: 50,
    backgroundColor: COLORS.LIGHT_BROWN,
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
