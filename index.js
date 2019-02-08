import React from 'react';
import {Text, AppRegistry} from 'react-native';

const App = () =>{
  return(
    <Text> Some Text </Text>
  );
};
AppRegistry.registerComponent('Albums', ()=>App);
//
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
//
// AppRegistry.registerComponent(appName, () => App);
