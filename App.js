import 'react-native-gesture-handler'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
  },
  {
    initialRouteName: 'Home',
  }
);

const App = createAppContainer(MainNavigator);

export default App;
