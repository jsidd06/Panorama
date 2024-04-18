/* eslint-disable react-hooks/exhaustive-deps */
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ErrorComp, HeaderComp, LoadingComp, SearchComp} from '@/components';
import {FontSize, Layout, MetricsSizes} from '@/themes/style';
import {COLORS} from '@/themes/Colors';
import {fetchDogsData} from '@/services/apis/apis';
import {useDispatch, useSelector} from 'react-redux';
import {setDogsData} from '@/redux/featuresSlice/allDataSlice';
import {IMAGES} from '@/themes/images';

const DogsScreen = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: any) => state.data.dogs);
  const [search, setSearch] = useState('golden retriever');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchDogsData(search);
      setLoading(false);
      dispatch(setDogsData(data));
    } catch (err: any) {
      setLoading(false);
      setError(err);
    }
  };

  const handleSubmit = () => {
    if (!search.trim()) {
      Alert.alert('Please enter a valid search');
    } else {
      setError('');
      fetchData();
    }
  };

  return loading ? (
    <LoadingComp />
  ) : error ? (
    <ErrorComp message={error} />
  ) : (
    <ImageBackground source={IMAGES.dogs} style={[Layout.fill]}>
      <HeaderComp title="Dogs" white />
      <View style={styles.root}>
        <SearchComp
          rootStyle={styles.search}
          placeholderTextColor={COLORS.WHITE}
          inputStyle={styles.input}
          onChangeText={(text: string) => setSearch(text)}
          value={search}
          onPress={handleSubmit}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {store?.map((item: any, index: number) => (
            <View key={index} style={styles.card}>
              <View style={[Layout.alignCenter]}>
                <Image source={{uri: item.image_link}} style={[styles.img]} />
              </View>
              {Object.entries(item)
                .reverse()
                .map(([key, value]: any) => {
                  if (key !== 'image_link') {
                    return (
                      <View
                        key={key}
                        style={[Layout.rowJCenter, styles.subRoot]}>
                        <Text style={styles.heading}>
                          {key.split('_').join(' ')}
                        </Text>
                        <Text style={styles.subHeading}>{value}</Text>
                      </View>
                    );
                  }
                  return null;
                })}
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default DogsScreen;

const styles = StyleSheet.create({
  root: {
    marginHorizontal: MetricsSizes.MEDIUM,
    marginVertical: MetricsSizes.MEDIUM,
  },
  subRoot: {
    marginVertical: MetricsSizes.SMALL,
    paddingHorizontal: MetricsSizes.SMALL,
  },
  search: {
    borderWidth: 1,
    height: 50,
    color: COLORS.BLACK,
    borderColor: COLORS.WHITE,
  },
  input: {height: 40, color: COLORS.WHITE},
  img: {width: 200, height: 200, resizeMode: 'contain'},
  card: {
    backgroundColor: COLORS.GREY,
    borderRadius: 8,
    marginTop: MetricsSizes.MEDIUM,
    marginBottom: 100,
  },
  heading: {
    fontSize: FontSize.md,
    color: COLORS.BLACK,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  subHeading: {
    fontSize: FontSize.md,
    color: COLORS.BROWN,
    fontWeight: '400',
  },
});
