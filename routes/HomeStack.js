import { createStackNavigator } from '@react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LandingScreen from '../Pages/landingscreen';

import { View ,Text } from 'react-native';
import  React from 'react';


const screens = {
    LandingScreen: {
        screen: LandingScreen
    },

}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

