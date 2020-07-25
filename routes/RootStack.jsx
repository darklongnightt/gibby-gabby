/* This is currently not working properly yet */
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../components/Home';
import AppStack from './Drawer';

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
    AppStack: {
        screen: AppStack,
    },
}

const rootStack = createStackNavigator(screens);

export default createAppContainer(rootStack);