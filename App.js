import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './screens/login';
import MenuScreen from './screens/menu';

const RootStack = createStackNavigator({
  Login: LoginScreen,
  Menu: MenuScreen
}, {
  initialRouteName: 'Login',
  headerMode: 'none'
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}
