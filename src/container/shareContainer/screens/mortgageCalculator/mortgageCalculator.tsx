import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ErrorComp, HeaderComp, LoadingComp} from '@/components';
import {Layout, MetricsSizes, fontFamily} from '@/themes/style';
import {COLORS} from '@/themes/Colors';
import {fetchMortgageCalculatorData} from '@/services/apis/apis';
import MortgageCalculatorFrag from '../../fragments/mortgageCalculatorFrag';

const MortgageCalculatorScreen = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestAmount, setInterestAmount] = useState('');
  const [durationYear, setDurationYear] = useState('');
  const [showOutput, setShowOutput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    if (loanAmount.trim() === '') {
      Alert.alert('Please enter loan amount');
    } else if (interestAmount.trim() === '') {
      Alert.alert('Please enter interest rate');
    } else if (durationYear.trim() === '') {
      Alert.alert('Please enter duration year');
    }
    try {
      const data = await fetchMortgageCalculatorData(
        loanAmount,
        interestAmount,
        durationYear,
      );
      setLoading(false);
      setShowResult(!showResult);
      setShowOutput(data);
    } catch (err: any) {
      setLoading(false);
      setError(err);
    }
  };

  const clearHandler = () => {
    setInterestAmount('');
    setLoanAmount('');
    setDurationYear('');
    setInterestAmount('');
    setShowResult(!showResult);
    setShowMore(false);
  };

  const moreHandler = () => {
    setShowMore(!showMore);
  };

  const annualPayment = [
    {title: 'Mortage', value: showOutput?.annual_payment?.mortgage},
    {title: 'Property tax', value: showOutput?.annual_payment?.property_tax},
    {
      title: 'Home insurance',
      value: showOutput?.annual_payment?.home_insurance,
    },
    {title: 'Hoa', value: showOutput?.annual_payment?.hoa},
    {title: 'Total', value: showOutput?.annual_payment?.total},
  ];

  const monthlyPayment = [
    {
      title: 'Annual home ins',
      value: showOutput?.monthly_payment?.annual_home_ins,
    },
    {title: 'Hoa', value: showOutput?.monthly_payment?.hoa},
    {title: 'Mortgage', value: showOutput?.monthly_payment?.mortgage},
    {
      title: 'Property tax',
      value: showOutput?.monthly_payment?.property_tax,
    },

    {title: 'Total', value: showOutput?.monthly_payment?.total},
  ];
  return (
    <View style={[styles.root, Layout.fill]}>
      <HeaderComp title="Mortgage Calculator" />
      <View style={styles.subRoot}>
        <View style={[styles.container]}>
          <Text style={styles.heading}>Enter Your Loan Amount</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={COLORS.BROWN}
            placeholder="Enter loan amount"
            keyboardType="numeric"
            maxLength={30}
            onChangeText={(text: any) => setLoanAmount(text)}
            value={loanAmount}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.heading}>Enter Your Interest Rate</Text>
          <TextInput
            placeholderTextColor={COLORS.BROWN}
            style={styles.input}
            placeholder="Enter interest rate"
            keyboardType="numeric"
            maxLength={30}
            onChangeText={(text: any) => setInterestAmount(text)}
            value={interestAmount}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.heading}>Enter Your Duration Years</Text>
          <TextInput
            placeholderTextColor={COLORS.BROWN}
            style={styles.input}
            placeholder="Enter duration years"
            keyboardType="numeric"
            maxLength={5}
            onChangeText={(text: any) => setDurationYear(text)}
            value={durationYear}
          />
        </View>
        <View
          style={[
            loanAmount && interestAmount && durationYear
              ? Layout.rowJCenter
              : Layout.flexAEnd,
          ]}>
          {loanAmount && interestAmount && durationYear && (
            <Pressable onPress={clearHandler} style={[Layout.alignCenter]}>
              <Text style={[styles.btnText, {color: COLORS.DANGER}]}>
                Clear All
              </Text>
            </Pressable>
          )}
          <Pressable
            onPress={fetchData}
            style={[Layout.alignCenter, styles.btn]}>
            <Text style={styles.btnText}>Submit</Text>
          </Pressable>
        </View>
      </View>
      <MortgageCalculatorFrag
        annualPayment={annualPayment}
        monthlyPayment={monthlyPayment}
        moreHandler={moreHandler}
        showMore={showMore}
        showOutput={showOutput}
        showResult={showResult}
      />
    </View>
  );
};

export default MortgageCalculatorScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FECDA6',
  },
  subRoot: {
    backgroundColor: '#EEE2DE',
    paddingHorizontal: MetricsSizes.MEDIUM,
    paddingVertical: MetricsSizes.MEDIUM,
    marginHorizontal: MetricsSizes.MEDIUM,
    marginVertical: MetricsSizes.MEDIUM,
    borderRadius: 8,
  },
  container: {
    marginVertical: MetricsSizes.SMALL,
  },
  heading: {
    fontSize: 16,
    color: COLORS.BLACK,
    fontFamily: fontFamily.FMedium,
    textAlign: 'left',
  },
  input: {
    borderBottomWidth: 1,
    borderRadius: 4,
    color: COLORS.BROWN,
  },
  btn: {
    borderWidth: 1,
    borderColor: COLORS.BROWN,
    width: 120,
    height: 30,
    backgroundColor: COLORS.WHITE,
    borderRadius: 4,
    marginTop: MetricsSizes.SMALL,
  },
  btnText: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: fontFamily.FMedium,
    lineHeight: 20,
  },
});
