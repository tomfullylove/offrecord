import React from 'react';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import { LogBox } from 'react-native';

import store from './state';
import RootNavigator from './navigation/RootNavigator';

LogBox.ignoreAllLogs();

enableScreens();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
