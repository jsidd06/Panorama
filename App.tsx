import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StackRoutes from '@/routes/stack';
import {Provider} from 'react-redux';
import {store} from '@/redux/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.root}>
        <StackRoutes />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
