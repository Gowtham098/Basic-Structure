/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import LoginScreen from './Class/LoginScreen'
import AllStreams from './Class/AllStreams'

import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  I18nManager,
  Platform,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createAppContainer } from 'react-navigation';

import { createStackNavigator,TransitionPresets } from 'react-navigation-stack';


export const navigationRef = React.createRef();

const App: () => React$Node = () => {
  return (
      <View style={{flex:1}}>
      <SafeAreaView edges={[ 'bottom',]} style={{flex:0,backgroundColor:'#016FA6'}}/>

<SafeAreaView edges={['right', 'bottom', 'left']} style={{ flex: 1,backgroundColor:'#fff'}}>
      <MyNavigator ref={navigationRef}/>
      </SafeAreaView>
     {Platform.OS != "ios" ? null :
      <KeyboardAccessoryNavigation
         doneDisabled
         doneButtonTitle = {"Done"}
         doneHidden
         nextHidden
         previousHidden
        />
     }
    </View>
  );
};



const MyNavigator = createAppContainer(createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    AllStreams: {
      screen: AllStreams,
      navigationOptions: {
        header: null
      }
    },
  },

  {
    initialRouteName:'LoginScreen',
    swipeEnabled: true,
     defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },       //'SplashScreen'
  }
))

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },


});

export default App;
