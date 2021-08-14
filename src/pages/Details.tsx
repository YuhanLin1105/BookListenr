import {RouteProp} from '@react-navigation/native';
import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {RootStackNavigationProp, RootStackParamList} from '../navigator';

interface IProps {
  navigation: RootStackNavigationProp;
  route: RouteProp<RootStackParamList, 'Details'>;
}

const Details: FC<IProps> = ({route}) => {
  return (
    <View>
      <Text>DetailsPage</Text>
      <Text>{route.params.id}</Text>
    </View>
  );
};

export default Details;
