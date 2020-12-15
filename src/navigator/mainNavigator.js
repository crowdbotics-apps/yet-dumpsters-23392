import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile185790Navigator from '../features/UserProfile185790/navigator';
import Tutorial185789Navigator from '../features/Tutorial185789/navigator';
import NotificationList185761Navigator from '../features/NotificationList185761/navigator';
import Settings185760Navigator from '../features/Settings185760/navigator';
import Settings185752Navigator from '../features/Settings185752/navigator';
import UserProfile185750Navigator from '../features/UserProfile185750/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile185790: { screen: UserProfile185790Navigator },
Tutorial185789: { screen: Tutorial185789Navigator },
NotificationList185761: { screen: NotificationList185761Navigator },
Settings185760: { screen: Settings185760Navigator },
Settings185752: { screen: Settings185752Navigator },
UserProfile185750: { screen: UserProfile185750Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
