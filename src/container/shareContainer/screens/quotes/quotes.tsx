/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  Alert,
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
import {FontSize, Layout, MetricsSizes} from '@/themes/style';
import {IMAGES} from '@/themes/images';
import {
  ErrorComp,
  HeaderComp,
  IconsComp,
  LoadingComp,
  SearchComp,
} from '@/components';
import {ICONS} from '@/themes/icons';

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
    <ImageBackground source={IMAGES.quotes} style={[Layout.fill]}>
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
          <IconsComp name={ICONS.refresh} size={20} color={COLORS.WHITE} />
        </Pressable>
        <ScrollView style={[Layout.fill]} showsVerticalScrollIndicator={false}>
          <View style={[Layout.fill]}>
            {store?.length > 0 ? (
              store?.map((item: any, index: number) => (
                <Card key={index}>
                  <Card.Title>{item.title}</Card.Title>
                  <ListItem>
                    <ListItem.Content>
                      <ListItem.Subtitle style={styles.subHeading}>
                        Quote:
                      </ListItem.Subtitle>
                      <Text style={styles.content}>{item.quote}</Text>
                    </ListItem.Content>
                  </ListItem>
                  <ListItem>
                    <ListItem.Content>
                      <ListItem.Subtitle style={styles.subHeading}>
                        Author:
                      </ListItem.Subtitle>
                      <Text style={styles.content}>{item.author}</Text>
                    </ListItem.Content>
                  </ListItem>
                  <ListItem>
                    <ListItem.Content>
                      <ListItem.Subtitle style={styles.subHeading}>
                        Category:
                      </ListItem.Subtitle>
                      <Text style={styles.content}>{item.category}</Text>
                    </ListItem.Content>
                  </ListItem>
                </Card>
              ))
            ) : (
              <View style={[Layout.fillB]}>
                <Text
                  style={[
                    styles.content,
                    {
                      paddingHorizontal: MetricsSizes.MEDIUM,
                      paddingVertical: MetricsSizes.MEDIUM,
                      fontSize: FontSize.md,
                    },
                  ]}>
                  No result Found! Make sure you have written right category
                  quotes [ age, alone, amazing, anger, architecture, art,
                  attitude, beauty, best, birthday, business, car, change,
                  communication, computers, cool, courage, dad, dating, death,
                  design, dreams, education, environmental, equality,
                  experience, failure, faith, family, famous, fear, fitness,
                  food, forgiveness, freedom, friendship, funny, future, god,
                  good, government, graduation, great, happiness, health,
                  history, home, hope, humor, imagination, inspirational,
                  intelligence, jealousy, knowledge, leadership, learning, legal
                  life, love marriage, medical, men, mom, money, morning,
                  movies, success ]
                </Text>
              </View>
            )}
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
  subHeading: {
    fontWeight: '600',
    fontSize: FontSize.md,
    color: COLORS.BLACK,
  },
  refresh: {
    width: MetricsSizes.MEDIUM,
    height: MetricsSizes.MEDIUM,
    resizeMode: 'contain',
  },
  content: {
    fontSize: FontSize.sm,
    color: COLORS.BLACK,
    fontWeight: '400',
  },
});
