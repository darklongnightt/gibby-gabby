import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import ProfileDetails from '../screens/ProfileDetails';

const screens = {
    Home: {
        screen: Home,
    },
    ProfileDetails: {
        screen: ProfileDetails,
    },
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);