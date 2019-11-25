import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { View, YellowBox, AppRegistry, SafeAreaView } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import {HomeScreen, ProfileScreen, RegisterScreen, LoginScreen} from './src/screens';
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";
import stores from './src/stores';
import { Provider } from 'mobx-react';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerStyle: {
          elevation: 0,
          borderBottomWidth: 0
        }
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        headerStyle: {
          elevation: 0,
          borderBottomWidth: 0
        }
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        headerStyle: {
          elevation: 0,
          borderBottomWidth: 0
        }
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerStyle: {
          elevation: 0,
          borderBottomWidth: 0
        }
      }
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const ProviderConfigured = () => (
  <Provider {...stores}>
      <SafeAreaView style={{ flex: 1 }}>
          <MainNavigator />
      </SafeAreaView>
  </Provider>
);

AppRegistry.registerComponent('smart_house', () => ProviderConfigured);

const App = createAppContainer(MainNavigator);

export default App;
