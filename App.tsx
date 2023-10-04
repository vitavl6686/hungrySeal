import * as React from 'react';
import { NavigationAction, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationScreenProp, createAppContainer } from 'react-navigation';
import { NavigationProp } from '@react-navigation/native';

import IndexScreen from './src/screens/indexScreen';
import GeneralSearchScreen from './src/screens/generalSearchScreen';
import PlaceScreen from './src/screens/placeScreen';

const navigation= createStackNavigator({
  index: IndexScreen,
  generalSearch: GeneralSearchScreen,
  place: PlaceScreen
  }, {
    initialRouteName: 'index'
  })

export default  createAppContainer(navigation);
