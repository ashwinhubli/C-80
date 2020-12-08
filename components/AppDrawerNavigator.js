import React from 'react';
import {AppTabNavigator} from './AppTabNavigator';
import {CustomSideBarMenu} from './customSideBarMenu';
import {createDrawerNavigator} from 'react-navigation-drawer';


export const AppDrawerNavigator = createDrawerNavigator({
   Home: {
      screen: AppTabNavigator,    
   },
    },
    {
       contentComponent: CustomSideBarMenu 
    },
    {
        initialRootName: 'Home'
     })

