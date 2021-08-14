import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigationProp} from '@/navigator/index';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '@/navigator/BottomTabs';

type HomeNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList, 'Home'>,
  RootStackNavigationProp
>;

interface IProps {
  navigation: HomeNavigationProp;
}

const Home: FC<IProps> = props => {
  const hanldeRedirect = () => {
    const {navigation} = props;
    navigation.navigate('Details', {id: 100});
  };
  return (
    <View>
      <Text>HomePage</Text>
      <Button title="move to details" onPress={hanldeRedirect} />
    </View>
  );
};

export default Home;
