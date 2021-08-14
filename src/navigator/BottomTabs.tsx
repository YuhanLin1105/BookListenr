import React, {useLayoutEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@/pages/Home';
import Listen from '@/pages/Listen';
import Account from '@/pages/Account';
import Found from '@/pages/Found';
import {FC} from 'react';
import {RootStackNavigationProp, RootStackParamList} from '@/navigator/index';
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
} from '@react-navigation/native';

type BottomTabRouteProp = RouteProp<RootStackParamList, 'BottomTabs'>;

interface IProps {
  navigation: RootStackNavigationProp;
  route: BottomTabRouteProp;
}

export type BottomTabParamList = {
  Home: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

// const getHeaderTitile = (
//   route: RouteProp<RootStackParamList, 'BottomTabs'>,
// ) => {
//   return route.state
//     ? route.state.routes[route.state.index].name
//     : route.params?.screen;
// };

const BottomTabs: FC<IProps> = props => {
  useLayoutEffect(() => {
    const {navigation, route} = props;
    navigation.setOptions({
      headerTitle: getFocusedRouteNameFromRoute(route) ?? 'Home',
    });
  }, [props]);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f86442',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Listen" component={Listen} />
      <Tab.Screen name="Found" component={Found} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};
export default BottomTabs;
