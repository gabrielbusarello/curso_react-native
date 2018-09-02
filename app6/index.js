import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Rotas from './src/Rotas';

export default class App extends Component {
  render() {
    return (
        <Rotas />
    );
  }
}

console.disableYellowBox = true;

AppRegistry.registerComponent('app6', () => App);
