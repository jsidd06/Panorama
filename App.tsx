import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StackRoutes from '@/routes/stack';
import {Provider} from 'react-redux';
import {store} from '@/redux/store';
import {OnBoardingScreen} from '@/container';

function App(): React.JSX.Element {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if (splash) {
    return <OnBoardingScreen />;
  }
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
