/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Card, ListItem} from 'react-native-elements';
import {fetchQuotesData} from '@/services/apis/apis';
import {useDispatch, useSelector} from 'react-redux';
import {setQuotesData} from '@/redux/featuresSlice/allDataSlice';
import {COLORS} from '@/themes/Colors';
import {Layout, MetricsSizes} from '@/themes/style';
import {IMAGES} from '@/themes/images';
import {ErrorComp, HeaderComp, LoadingComp, SearchComp} from '@/components';

const QuotesScreen = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: any) => state.data.quotes);
  const [search, setSearch] = useState('happiness');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchQuotesData(search);
      setLoading(false);
      dispatch(setQuotesData(data));
    } catch (err) {
      setLoading(false);
      setError(err.message || 'An error occurred');
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
    <ImageBackground source={IMAGES.recipes} style={[Layout.fill]}>
      <HeaderComp title="Quotes" white />
      <View style={[styles.root, Layout.fill]}>
        <SearchComp
          rootStyle={styles.search}
          placeholderTextColor={COLORS.WHITE}
          inputStyle={styles.input}
          onChangeText={(text: string) => setSearch(text)}
          value={search}
          onPress={handleSubmit}
        />
        <Pressable
          style={[Layout.flexEndA, {marginBottom: MetricsSizes.SMALL}]}
          onPress={handleSubmit}>
          <Image style={styles.refresh} source={IMAGES.refresh} />
        </Pressable>
        <ScrollView style={[Layout.fill]} showsVerticalScrollIndicator={false}>
          <View style={[styles.subRoot, Layout.fill]}>
            {store?.map((item: any, index: number) => (
              <Card key={index}>
                <Card.Title>{item.title}</Card.Title>
                <ListItem>
                  <ListItem.Content>
                    <ListItem.Subtitle style={styles.subHeading}>
                      Quote:
                    </ListItem.Subtitle>
                    <Text>{item.quote}</Text>
                  </ListItem.Content>
                </ListItem>
                <ListItem>
                  <ListItem.Content>
                    <ListItem.Subtitle style={styles.subHeading}>
                      Author:
                    </ListItem.Subtitle>
                    <Text>{item.author}</Text>
                  </ListItem.Content>
                </ListItem>
                <ListItem>
                  <ListItem.Content>
                    <ListItem.Subtitle style={styles.subHeading}>
                      Category:
                    </ListItem.Subtitle>
                    <Text>{item.category}</Text>
                  </ListItem.Content>
                </ListItem>
              </Card>
            ))}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default QuotesScreen;

const styles = StyleSheet.create({
  search: {
    borderWidth: 1,
    height: 50,
    color: COLORS.BLACK,
    borderColor: COLORS.WHITE,
  },
  input: {height: 40, color: COLORS.WHITE},
  root: {
    marginHorizontal: MetricsSizes.MEDIUM,
  },
  subRoot: {
    backgroundColor: COLORS.GREY,
  },
  subHeading: {
    fontWeight: '600',
  },
  refresh: {
    width: MetricsSizes.MEDIUM,
    height: MetricsSizes.MEDIUM,
    resizeMode: 'contain',
  },
});
