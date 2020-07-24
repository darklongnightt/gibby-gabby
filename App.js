import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import RootNavigator from './routes/Drawer';

export default function App() {
  const [appLoading, setAppLoading] = useState(true);

  const loadFonts = async () => {
    await Font.loadAsync({
      'runy-tunes': require('./assets/fonts/RunyTunesRevisitedNF.ttf'),
      'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
      'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    })
  }

  if (appLoading) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setAppLoading(false)}
      />
    );
  } else {
    return (
      <RootNavigator />
    );
  }
}
