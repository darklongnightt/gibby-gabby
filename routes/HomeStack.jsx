import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import ProfileDetails from '../screens/ProfileDetails';
import ProfileList from '../screens/ProfileList';

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
    },
    ProfileDetails: {
        screen: ProfileDetails,
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: 'grey',
        }
    }
});
export default createAppContainer(HomeStack);