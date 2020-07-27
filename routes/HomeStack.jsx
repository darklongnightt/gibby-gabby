import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { defaultNavigationOptions } from './NavigationOptions';
import Home from '../components/Home';
import UserDetails from '../components/user-catalog/UserDetails';
import UserList from '../components/user-catalog/UserList';
import Header from '../shared/Header';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: '',
            headerStyle: {
                height: 0,
            }
        }
    },
    UserList: {
        screen: UserList,
        navigationOptions: {
            headerTitle: () => <Header title={'Nearby Me'} />
        }
    },
    UserDetails: {
        screen: UserDetails,
        navigationOptions: {
            headerTitle: () => <Header title={'User Details'} />
        }
    },
}

const homeStack = createStackNavigator(screens, {
    defaultNavigationOptions,
});

export default createAppContainer(homeStack);