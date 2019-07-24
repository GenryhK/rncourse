import React from 'react'
import {Navigation} from 'react-native-navigation';
import  { Provider } from  'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from'./src/screens/SharePlace/SharePlace'
import FindPlaceScreen from'./src/screens/FindPlace/FindPlace'
import SideDrawer from './src/screens/SideDrawer/SideDrawer'
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail'
import configureStore from './src/store/configureStore'

const store = configureStore();

//Register Screen

Navigation.registerComponent('awesome-places.AuthScreen',
    () => (props) => (
    <Provider store={store}>
        <AuthScreen {...props}/>
    </Provider>
), ()=> AuthScreen);
Navigation.registerComponent('awesome-places.SharePlaceScreen',
    () => (props) => (
        <Provider store={store}>
            <SharePlaceScreen {...props}/>
        </Provider>
    ), () =>SharePlaceScreen);
Navigation.registerComponent('awesome-places.FindPlaceScreen',
    () =>  (props) => (
        <Provider store={store}>
            <FindPlaceScreen {...props}/>
        </Provider>
    ),()=> FindPlaceScreen);
Navigation.registerComponent('awesome-places.PlaceDetailScreen',
    () =>  (props) => (
        <Provider store={store}>
            <PlaceDetailScreen {...props}/>
        </Provider>
    ),()=> PlaceDetailScreen);
Navigation.registerComponent('awesome-places.SideDrawer',
    ()=> SideDrawer);

//Start a App
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
          component: {
              name: 'awesome-places.AuthScreen',
              title: 'Login'
          }
      }
    })
});
