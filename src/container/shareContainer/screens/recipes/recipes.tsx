/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  Alert,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Card, ListItem} from 'react-native-elements';
import {fetchRecipeData} from '@/services/apis/apis';
import {useDispatch, useSelector} from 'react-redux';
import {setRecipesData} from '@/redux/featuresSlice/allDataSlice';
import {COLORS} from '@/themes/Colors';
import {FontSize, Layout, MetricsSizes, fontFamily} from '@/themes/style';
import {IMAGES} from '@/themes/images';
import {ErrorComp, HeaderComp, LoadingComp, SearchComp} from '@/components';

const RecipesScreen = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: any) => state.data.recipes);
  const [search, setSearch] = useState('italian wedding soup');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchRecipeData(search);
      setLoading(false);
      dispatch(setRecipesData(data));
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
      <HeaderComp title="Recipes" white />
      <View style={[styles.root, Layout.fill]}>
        <SearchComp
          rootStyle={styles.search}
          placeholderTextColor={COLORS.WHITE}
          inputStyle={styles.input}
          onChangeText={(text: string) => setSearch(text)}
          value={search}
          onPress={handleSubmit}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[Layout.fill]}>
            {store?.map((item: any, index: number) => (
              <Card key={index}>
                <Card.Title>{item.title}</Card.Title>
                <ListItem>
                  <ListItem.Content>
                    <ListItem.Subtitle style={styles.subHeading}>
                      Ingredients:
                    </ListItem.Subtitle>
                    <Text style={styles.content}>{item.ingredients}</Text>
                  </ListItem.Content>
                </ListItem>
                <ListItem>
                  <ListItem.Content>
                    <ListItem.Subtitle style={styles.subHeading}>
                      Instructions:
                    </ListItem.Subtitle>
                    <Text style={styles.content}>{item.instructions}</Text>
                  </ListItem.Content>
                </ListItem>
                <ListItem>
                  <ListItem.Content>
                    <ListItem.Subtitle style={styles.subHeading}>
                      Servings:
                    </ListItem.Subtitle>
                    <Text style={styles.content}>{item.servings}</Text>
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

export default RecipesScreen;

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
    fontFamily: fontFamily.FRegular,
  },
  content: {
    fontSize: FontSize.sm,
    color: COLORS.BLACK,
    fontWeight: '400',
    fontFamily: fontFamily.FMedium,
  },
});
