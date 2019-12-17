import React, { Component } from 'react';
import { View, YellowBox, AppRegistry } from 'react-native';
import {createStackNavigator, createSwitchNavigator, createBottomTabNavigator, SafeAreaView} from 'react-navigation';
//import {HomeScreen, ProfileScreen, RegisterScreen, LoginScreen} from './src/screens';
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";
import AddComponentScreen from "./src/screens/AddComponentScreen";
import AddTriggerScreen from "./src/screens/AddTriggerScreen";
import AddSensorTriggerScreen from "./src/screens/AddSensorTriggerScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListTriggerScreen from "./src/screens/ListTriggerScreen";
import MusicScreen from "./src/screens/MusicScreen";
import stores from './src/stores';
import { Provider } from 'mobx-react';
import Colors from './src/constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoggedOutStack = createStackNavigator(
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
  },
  {
    initialRouteName: 'Home',
  }
)
const ComponentStack = createStackNavigator(
  {
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
    Component: {
      screen: ComponentScreen,
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
    initialRouteName: 'Profile',
  }
)

const TriggerStack = createStackNavigator(
  {
    ListTrigger: {
      screen: ListTriggerScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '',
          elevation: 0,
          borderBottomWidth: 0
        }
      }
    },
    AddTrigger: {
      screen: AddTriggerScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '',
          elevation: 0,
          borderBottomWidth: 0
        }
      }
    },
    AddSensorTrigger: {
      screen: AddSensorTriggerScreen,
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
    initialRouteName: 'ListTrigger',
  }
)

const MusicStack = createStackNavigator(
  {
    Music: {
      screen: MusicScreen,
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
    initialRouteName: 'Music',
  }
)

const BottomTab = createBottomTabNavigator({
  Home: {
    screen: ComponentStack,
    path: '',
    navigationOptions: {
      tabBarLabel: 'Componentes',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="lightbulb-o" size={26} color={tintColor}></Icon>
      )
    },
  },
  Trigger: {
    screen: TriggerStack,
    path: '',
    navigationOptions: {
      tabBarLabel: 'Gatilhos',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="clock-o" size={26} color={tintColor}></Icon>
      )
    },
  },
  Music: {
    screen: MusicStack,
    path: '',
    navigationOptions: {
      tabBarLabel: 'Música',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="music" size={26} color={tintColor}></Icon>
      )
    },
  },
},{
    initialRouteName: 'Home',
    tabBarOptions: {
      style: {
        backgroundColor: '#FAFAFA',
        paddingTop: 10,
        height: 52
      },
      activeTintColor: '#4287f5',
      inactiveTintColor: 'grey'
    }
  }
)

const BaseStack = createSwitchNavigator(
  {
    LoggedOutStack: {
      screen: LoggedOutStack,
      path: ''
    },
    BottomTab: {
      screen: BottomTab,
      path: ''
    }
  },{
      initialRouteName: 'LoggedOutStack',
    }
)

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
          <BaseStack/>
        </SafeAreaView>
      </Provider>
    );
  }
}

//const App = createAppContainer(MainNavigator);

//export default App;
