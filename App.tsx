import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StackRoutes from '@/routes/stack';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.root}>
      <StackRoutes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
