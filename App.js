import React, { Component } from 'react';
import { View, YellowBox, AppRegistry } from 'react-native';
import {createStackNavigator, createSwitchNavigator, createBottomTabNavigator, SafeAreaView} from 'react-navigation';
//import {HomeScreen, ProfileScreen, RegisterScreen, LoginScreen} from './src/screens';
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";
import AddComponentScreen from "./src/screens/AddComponentScreen";
import stores from './src/stores';
import { Provider } from 'mobx-react';
import Colors from './src/constants/Colors';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '',
          elevation: 0,
          borderBottomWidth: 0
        }
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '',
          elevation: 0,
          borderBottomWidth: 0
        }
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '',
          elevation: 0,
          borderBottomWidth: 0
        }
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '',
          elevation: 0,
          borderBottomWidth: 0
        }
      }
    },
    AddComponent: {
      screen: AddComponentScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '',
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

// const ProviderConfigured = () => (
//   <Provider {...stores}>
//       <SafeAreaView style={{ flex: 1 }}>
//           <MainNavigator />
//       </SafeAreaView>
//   </Provider>
// );
//
// AppRegistry.registerComponent('smart_house', () => ProviderConfigured);
export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <SafeAreaView style={{ flex: 1 }}>
          <MainNavigator/>
        </SafeAreaView>
      </Provider>
    );
  }
}

//const App = createAppContainer(MainNavigator);

//export default App;
