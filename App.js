import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import History from './screens/History';
import Order from './screens/Order';
import Profile from './screens/Profile';
import Videos from './screens/Videos';
import {color} from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            style: {padding: 10, height: 60},
            labelStyle: {color: '#000000', fontSize: 15, margin: 10},
          }}>
          <Tab.Screen
            options={{
              tabBarIcon: ({activeTintColor}) => (
                <Icon
                  name="store"
                  size={25}
                  style={{margin: 10}}
                  color="#E23744"
                />
              ),
            }}
            name="Order"
            component={Order}
          />
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <Icon name="receipt" size={25} style={{margin: 10}} />
              ),
            }}
            name="History"
            component={History}
          />
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <Icon name="person" size={25} style={{margin: 10}} />
              ),
            }}
            name="Profile"
            component={Profile}
          />
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <Icon name="videocam" size={25} style={{margin: 10}} />
              ),
            }}
            name="Videos"
            component={Videos}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
