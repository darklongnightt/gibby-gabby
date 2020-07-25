import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { defaultNavigationOptions } from './NavigationOptions';
import About from '../components/About';
import Header from '../shared/Header';

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            headerTitle: () => <Header title='About' />
        }
    },
};

const aboutStack = createStackNavigator(screens, {
    defaultNavigationOptions,
});

export default createAppContainer(aboutStack);