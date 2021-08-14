import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigationProp} from '@/navigator/index';

interface IProps {
  navigation: RootStackNavigationProp;
}

const Listen: FC<IProps> = props => {
  const hanldeRedirect = () => {
    const {navigation} = props;
    navigation.navigate('Details', {id: 100});
  };
  return (
    <View>
      <Text>Listen</Text>
      <Button title="move to details" onPress={hanldeRedirect} />
    </View>
  );
};

export default Listen;
