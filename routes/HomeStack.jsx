import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { defaultNavigationOptions } from './NavigationOptions';
import Home from '../components/Home';
import ProfileDetails from '../components/profile/ProfileDetails';
import ProfileList from '../components/profile/ProfileList';
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
    ProfileList: {
        screen: ProfileList,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title={'Nearby Me'}/>
            }
        }
    },
    ProfileDetails: {
        screen: ProfileDetails,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title={'Profile Details'}/>
            }
        }
    },
}

const homeStack = createStackNavigator(screens, {
    defaultNavigationOptions,
});

export default createAppContainer(homeStack);