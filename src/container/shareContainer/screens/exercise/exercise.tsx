/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Layout, MetricsSizes} from '@/themes/style';
import {ErrorComp, HeaderComp, LoadingComp, SearchComp} from '@/components';
import {useDispatch, useSelector} from 'react-redux';
import {fetchExerciseData} from '@/services/apis/apis';
import {setExerciseData} from '@/redux/featuresSlice/allDataSlice';
import {COLORS} from '@/themes/Colors';
import ExerciseFrag from '../../fragments/exerciseFrag';

const ExerciseScreen = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: any) => state?.data?.exercise);
  const [search, setSearch] = useState('biceps');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchExerciseData(search);
      setLoading(false);
      dispatch(setExerciseData(data));
    } catch (err: any) {
      setLoading(false);
      setError(err);
    }
  };

  return loading ? (
    <LoadingComp />
  ) : error ? (
    <ErrorComp message={error} />
  ) : (
    <View style={[styles.root, Layout.fill]}>
      <HeaderComp title="Exercise" white />
      <View style={[Layout.fill, styles.subRoot]}>
        <SearchComp
          onChangeText={(text: any) => setSearch(text)}
          onPress={fetchData}
          value={search}
          placeholderTextColor={COLORS.BLACK}
        />
        <ExerciseFrag data={store} />
      </View>
    </View>
  );
};

export default ExerciseScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.DARK_BLUE,
  },
  subRoot: {
    paddingHorizontal: MetricsSizes.MEDIUM,
    paddingVertical: MetricsSizes.SMALL,
  },
});
