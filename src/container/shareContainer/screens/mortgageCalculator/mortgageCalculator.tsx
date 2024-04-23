import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {HeaderComp} from '@/components';
import {FontSize, Layout, MetricsSizes, fontFamily} from '@/themes/style';
import {COLORS} from '@/themes/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMortgageCalculatorData} from '@/services/apis/apis';
import {setMortgageCalculator} from '@/redux/featuresSlice/allDataSlice';

const MortgageCalculatorScreen = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: any) => state?.data?.mortgageCalculator);
  console.log('store', store);
  const [loanAmount, setLoanAmount] = useState('');
  const [interestAmount, setInterestAmount] = useState('');
  const [durationYear, setDurationYear] = useState('');
  const [totalInterest, setTotalInterest] = useState(0);
  const [showResult, setShowResult] = useState(false);
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
      console.log('data', data);
      setLoading(false);
      setShowResult(!showResult);
      setTotalInterest(data.total_interest_paid);
      dispatch(setMortgageCalculator(data));
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
  };
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
        {showResult && totalInterest ? (
          <View style={[styles.resultCtn]}>
            <View style={[Layout.rowCCenter]}>
              <Text style={styles.contentText}>Total interest paid:- </Text>
              <Text style={styles.answer}>{totalInterest}</Text>
            </View>
            <Pressable>
              <Text style={[styles.answer, {color: COLORS.BLUE}]}>
                more details
              </Text>
            </Pressable>
          </View>
        ) : null}
      </View>
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
  contentText: {
    color: COLORS.BLACK,
    fontFamily: fontFamily.FMedium,
    lineHeight: 20,
  },
  resultCtn: {
    backgroundColor: '#EFF5F5',
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
});
