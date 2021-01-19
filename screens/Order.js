import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeOrder from './HomeOrder';

const Stack = createStackNavigator();
class Order extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeOrder" component={HomeOrder} />
      </Stack.Navigator>
    );
  }
}

export default Order;
