import React from 'react';
import {LogBox, SafeAreaView} from 'react-native';
import Routes from './Routes';
import {COLOR_BACKGROUND} from './src/constants/styles';
import {QueryClientProvider} from 'react-query';
import Toast from 'react-native-toast-message';
import {queryClient} from './src/services/queryClient';
import {LoadingIndicatorMutation} from './src/component/shared/LoadingIndicator/LoadingIndicator';

const App = () => {
  LogBox.ignoreLogs(['Setting a timer for a long period of time']);
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{backgroundColor: COLOR_BACKGROUND, height: '100%'}}>
        <Routes />
        <Toast ref={ref => Toast.setRef(ref)} />
        <LoadingIndicatorMutation />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
