import {ScrollView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {FontSize, MetricsSizes, fontFamily} from '@/themes/style';
import {COLORS} from '@/themes/Colors';
import {Card, ListItem} from 'react-native-elements';

type ExerciseFragProps = {
  data: any[];
};

const ExerciseFrag = ({data}: ExerciseFragProps) => {
  return data.length > 0 ? (
    <ScrollView showsVerticalScrollIndicator={false}>
      {data?.map((d: any, i: number) => (
        <Card containerStyle={styles.card} key={i}>
          <Card.Title style={styles.heading}>{d.name}</Card.Title>
          <ListItem>
            <ListItem.Content>
              <ListItem.Subtitle style={styles.subHeading}>
                <Text style={styles.boldHeading}>Type:-</Text> {d.type}
              </ListItem.Subtitle>
              <ListItem.Subtitle style={styles.subHeading}>
                <Text style={styles.boldHeading}>Muscle:-</Text> {d.muscle}
              </ListItem.Subtitle>
              <ListItem.Subtitle style={styles.subHeading}>
                <Text style={styles.boldHeading}>Equipment:-</Text>{' '}
                {d.equipment}
              </ListItem.Subtitle>
              <ListItem.Subtitle style={styles.subHeading}>
                <Text style={styles.boldHeading}>Difficulty:-</Text>{' '}
                {d.difficulty}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <ListItem.Content>
              <ListItem.Subtitle style={styles.subHeading}>
                <Text style={styles.boldHeading}>Instructions:-</Text>{' '}
                {d.instructions}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </Card>
      ))}
    </ScrollView>
  ) : (
    <Text style={styles.notFound}>No result found!</Text>
  );
};

export default ExerciseFrag;

const styles = StyleSheet.create({
  card: {
    margin: 0,
    marginBottom: MetricsSizes.MEDIUM,
    borderRadius: 8,
  },
  heading: {
    fontSize: FontSize.md,
    fontWeight: '500',
    fontFamily: fontFamily.FMedium,
    color: COLORS.BLACK,
  },
  subHeading: {
    fontSize: FontSize.sm,
    fontWeight: '400',
    fontFamily: fontFamily.FRegular,
    color: COLORS.BRINJAL,
  },
  boldHeading: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.FRegular,
    color: COLORS.BLACK,
  },
  notFound: {
    backgroundColor: COLORS.WHITE,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.FRegular,
    color: COLORS.BLACK,
    paddingHorizontal: MetricsSizes.MEDIUM,
    borderRadius: 8,
  },
});
