import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import IndexScreen from './src/screens/indexScreen';


const navigation = createStackNavigator({
  index: IndexScreen
  }, {
    initialRouteName: 'index'
  })

export default  createAppContainer(navigation);
