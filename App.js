import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from './reducers/reducer'


import MainScreen from './components/MainScreen'
import OnePhotoScreen from './components/OnePhotoScreen'

const store = createStore(reducer, applyMiddleware(
  reduxThunk
))

let MainNavigator = createStackNavigator(
  {
    MainScreen: { screen: MainScreen },
    OnePhotoScreen: { screen: OnePhotoScreen }
  },
  {
    initialRouteName: "MainScreen"
  }
);

let Navigation = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}





