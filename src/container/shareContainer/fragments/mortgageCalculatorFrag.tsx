import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '@/themes/Colors';
import {Layout, MetricsSizes, fontFamily} from '@/themes/style';

type MortgageCalculatorFragProps = {
  showResult: boolean;
  showOutput: string;
  moreHandler: any;
  showMore: boolean;
  annualPayment: any[];
  monthlyPayment: any[];
};

const MortgageCalculatorFrag = ({
  showMore,
  showOutput,
  showResult,
  monthlyPayment,
  moreHandler,
  annualPayment,
}: MortgageCalculatorFragProps) => {
  const renderItem = (title: string, data: any) => {
    return (
      <View style={[styles.main]}>
        <View style={[Layout.alignCenter]}>
          <Text style={styles.contentText}>{title}</Text>
        </View>
        {data?.map((d: any, i: number) => (
          <View key={i} style={[Layout.rowACenter]}>
            <Text
              style={[
                styles.contentText,
                {
                  paddingHorizontal: MetricsSizes.SMALL,
                  paddingVertical: MetricsSizes.SMALL,
                },
              ]}>
              {d.title}:-{' '}
            </Text>
            <Text style={styles.contentText}>{d.value}</Text>
          </View>
        ))}
      </View>
    );
  };
  return (
    <ScrollView style={[{marginBottom: MetricsSizes.SMALL}]}>
      <View style={[styles.output]}>
        {showResult && showOutput ? (
          <View style={[styles.resultCtn]}>
            <View style={[Layout.rowCCenter]}>
              <Text style={styles.contentText}>Total interest paid:- </Text>
              <Text style={styles.answer}>
                {showOutput?.total_interest_paid}
              </Text>
            </View>
            <Pressable onPress={moreHandler}>
              <Text style={[styles.answer, {color: COLORS.BLUE}]}>
                more details
              </Text>
            </Pressable>
          </View>
        ) : null}
        {showMore ? (
          <>
            {renderItem('Annual Payment', annualPayment)}
            {renderItem('Monthly Payment', monthlyPayment)}
          </>
        ) : null}
      </View>
    </ScrollView>
  );
};

export default MortgageCalculatorFrag;

const styles = StyleSheet.create({
  contentText: {
    color: COLORS.BLACK,
    fontFamily: fontFamily.FMedium,
    lineHeight: 20,
  },
  resultCtn: {
    backgroundColor: COLORS.LIGHT_GREY,
    paddingVertical: MetricsSizes.MEDIUM,
    marginVertical: MetricsSizes.MEDIUM,
    borderRadius: 4,
  },
  answer: {
    fontSize: 14,
    color: COLORS.BROWN,
    fontFamily: fontFamily.FMedium,
    lineHeight: 20,
    textAlign: 'center',
  },
  main: {
    backgroundColor: COLORS.LIGHT_GREY,
    paddingVertical: MetricsSizes.MEDIUM,
    borderRadius: 4,
  },
  output: {
    paddingHorizontal: MetricsSizes.MEDIUM,
  },
});
