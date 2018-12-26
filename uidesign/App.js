/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Login from './login';
import signup from './signup';
import home from './home';
import intro from './intro';
import { createStackNavigator, createAppContainer } from 'react-navigation';


  const Applicationstack = createStackNavigator({
    Login: {
      screen: Login,
    },
    Signup: {
      screen: signup,
    },
    Intro: {
      screen: intro,
    },
    Home: {
      screen: home,
    },
  },
    {
      initialRouteName: 'Login',
  });

export default createAppContainer(Applicationstack);