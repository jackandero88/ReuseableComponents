import React from 'react';
import { View, StyleSheet, StatusBar, Linking } from 'react-native';

import store from "./store/store";
import { Provider } from "react-redux";

import RootStack from "./navigators/AppRouter";
import theme from './themes/global/theme.style';


export default class App extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={theme.PRIMARY_COLOR}
          barStyle="light-content"/>
          <Provider store={store}>
            <RootStack />
          </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
