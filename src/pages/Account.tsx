import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigationProp} from '@/navigator/index';

interface IProps {
  navigation: RootStackNavigationProp;
}

const Account: FC<IProps> = props => {
  const hanldeRedirect = () => {
    const {navigation} = props;
    navigation.navigate('Details', {id: 100});
  };
  return (
    <View>
      <Text>Account Page</Text>
      <Button title="move to details" onPress={hanldeRedirect} />
    </View>
  );
};

export default Account;
