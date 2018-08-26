import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';

import ListaItens from './src/components/ListaItens';

class App extends Component {
    render() {
        return (
            <ListaItens />
        );
    }
}

AppRegistry.registerComponent('app4', () => App);
