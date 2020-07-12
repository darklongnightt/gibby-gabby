import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Login from './screens/Login';

const loadFonts = () => {
  console.log('loading fonts...')
  Font.loadAsync({
    'runy-tunes': require('./assets/fonts/RunyTunesRevisitedNF.ttf'),
    'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
  })
}

export default function App() {
  const [appLoading, setAppLoading] = useState(true);

  if (appLoading) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setAppLoading(false)}
        onError={() => console.log('error loading app')}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
