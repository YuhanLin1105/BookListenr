import React from 'react';
import {Text, View} from 'react-native';
import {test} from '@/utils/index';

const App = () => {
  return (
    <View>
      <Text>App!!!!{test()}</Text>
    </View>
  );
};

export default App;
