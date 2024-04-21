import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {HeaderComp} from '@/components';
import {FontSize, Layout} from '@/themes/style';
import {COLORS} from '@/themes/Colors';
import {evaluate} from 'mathjs';

const data = [
  ['1', '2', '3', '+'],
  ['4', '5', '6', '-'],
  ['7', '8', '9', '*'],
  ['C', '0', '=', '/'],
];

const CalculatorScreen = () => {
  const [showNum, setShowNum] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (input: string) => {
    if (input === '=') {
      try {
        const evalResult = evaluate(showNum);
        setResult(evalResult.toString());
        setShowNum('');
      } catch (error) {
        setResult('');
      }
    } else if (input === 'C') {
      setShowNum('');
      setResult('');
    } else {
      setShowNum(showNum + input);
    }
  };
  return (
    <View style={[Layout.fill, styles.main]}>
      <HeaderComp title="Calculator" white />
      <View style={styles.root}>
        <View style={styles.container}>
          <Text style={styles.numContent}>
            {result !== '' ? result : showNum}
          </Text>
        </View>
      </View>
      <View style={styles.subRoot}>
        {data.map((row: any, index: number) => (
          <View key={index} style={[Layout.fill, Layout.row]}>
            {row?.map((col: any, i: number) => (
              <Pressable
                key={i}
                onPress={() => handleSubmit(col)}
                style={[styles.contentCtn, Layout.alignCenter, Layout.fill]}>
                <Text style={styles.text}>{col}</Text>
              </Pressable>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default CalculatorScreen;

const styles = StyleSheet.create({
  main: {backgroundColor: COLORS.DARK_PURPLE},
  root: {
    backgroundColor: COLORS.DARK_PURPLE,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  subRoot: {
    backgroundColor: COLORS.LIGHT_PURPLE,
    flex: 3,
  },
  contentCtn: {
    borderWidth: 1,
    borderColor: COLORS.DARK_PURPLE,
  },
  text: {
    fontSize: FontSize.lg,
    fontWeight: '600',
    color: COLORS.BLACK,
  },
  numContent: {
    fontSize: FontSize.xxl,
    fontWeight: '600',
    color: COLORS.WHITE,
  },
  container: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
});
