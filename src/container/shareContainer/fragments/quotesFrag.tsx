import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontSize, Layout, MetricsSizes, fontFamily} from '@/themes/style';
import {COLORS} from '@/themes/Colors';
import {Card, ListItem} from 'react-native-elements';
type QuotesFragProps = {
  data: any[];
};

const QuotesFrag = ({data}: QuotesFragProps) => {
  return (
    <ScrollView style={[Layout.fill]} showsVerticalScrollIndicator={false}>
      <View style={[Layout.fill]}>
        {data?.length > 0 ? (
          data?.map((item: any, index: number) => (
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
            <Text style={[styles.notFound]}>
              No result Found! Make sure you have written right category quotes
            </Text>
            <Text
              style={[
                styles.content,
                {
                  paddingHorizontal: MetricsSizes.MEDIUM,
                  paddingVertical: MetricsSizes.MEDIUM,
                  fontSize: FontSize.md,
                },
              ]}>
              [ age, alone, amazing, anger, architecture, art, attitude, beauty,
              best, birthday, business, car, change, communication, computers,
              cool, courage, dad, dating, death, design, dreams, education,
              environmental, equality, experience, failure, faith, family,
              famous, fear, fitness, food, forgiveness, freedom, friendship,
              funny, future, god, good, government, graduation, great,
              happiness, health, history, home, hope, humor, imagination,
              inspirational, intelligence, jealousy, knowledge, leadership,
              learning, legal life, love marriage, medical, men, mom, money,
              morning, movies, success ]
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default QuotesFrag;

const styles = StyleSheet.create({
  subHeading: {
    fontWeight: '600',
    fontSize: FontSize.md,
    color: COLORS.BLACK,
    fontFamily: fontFamily.FRegular,
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
    fontFamily: fontFamily.FMedium,
  },
  notFound: {
    paddingHorizontal: MetricsSizes.MEDIUM,
    paddingVertical: MetricsSizes.MEDIUM,
    fontSize: FontSize.md,
    fontWeight: '600',
    color: COLORS.BLACK,
    fontFamily: fontFamily.FBold,
  },
});
