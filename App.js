import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import GetRemainderScreen from './screens/GetRemainder';
import SaveRemainderScreen from './screens/SaveRemainder';
import TodayRemainderScreen from './screens/TodayRemainder'
//import LoginScreen from './screens/LoginScreen'
export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
 
  SaveRemainder: SaveRemainderScreen,
   GetRemainder: GetRemainderScreen,
   TodayRemainder:TodayRemainderScreen
});
/*const SwitchNavigator= createSwitchNavigator({
 // LoginScreen:{screen:LoginScreen},
TabNavigator:{screen:TabNavigator},
})*/

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
