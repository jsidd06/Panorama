import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontSize, Layout, MetricsSizes, fontFamily} from '@/themes/style';
import {Card, ListItem} from 'react-native-elements';
import {COLORS} from '@/themes/Colors';
import NotFoundComp from '@/components/common/notFound';

type RecipesFragProps = {
  data: any[];
};

const RecipesFrag = ({data}: RecipesFragProps) => {
  return data ? (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[Layout.fill]}>
        {data?.map((item: any, index: number) => (
          <Card containerStyle={styles.card} key={index}>
            <Card.Title>{item.title}</Card.Title>
            <ListItem>
              <ListItem.Content>
                <ListItem.Subtitle style={styles.subHeading}>
                  Ingredients:-{' '}
                  <Text style={styles.content}>{item.ingredients}</Text>
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem>
              <ListItem.Content>
                <ListItem.Subtitle style={styles.subHeading}>
                  Instructions:-{' '}
                  <Text style={styles.content}>{item.instructions}</Text>
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem>
              <ListItem.Content>
                <ListItem.Subtitle style={styles.subHeading}>
                  Servings:- <Text style={styles.content}>{item.servings}</Text>
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </Card>
        ))}
      </View>
    </ScrollView>
  ) : (
    <NotFoundComp message="No result found!" />
  );
};

export default RecipesFrag;

const styles = StyleSheet.create({
  card: {
    margin: 0,
    marginBottom: MetricsSizes.MEDIUM,
    borderRadius: 8,
  },
  subHeading: {
    fontWeight: '600',
    fontSize: 16,
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
