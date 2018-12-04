import React from 'react';
import { StackNavigator } from 'react-navigation';
import SplashScreen from '../screens/SplashScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import TopicScreen from '../screens/TopicScreen';
import VideoScreen from '../screens/VideoScreen';

const RootStack = StackNavigator(
  {
    Splash: {
      screen: SplashScreen,
    },
    Categories: {
      screen: CategoriesScreen,
    },
    Topic: {
      screen: TopicScreen,
    },
    Video: {
      screen: VideoScreen,
    }
  },
  {
    headerMode: 'screen',
    initialRouteName: 'Splash',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#249129',
        shadowRadius: 0,
        shadowColor: 'transparent',
        shadowOffset: {
          height: 0,

        }
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white'
      }
    },
  }
);

export default RootStack;
