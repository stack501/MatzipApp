import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
} from 'react-native';
import RootNavigator from './src/navigations/root/RootNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
