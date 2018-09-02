import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

export default class App extends Component {
  render() {
    return (
        <Navigator
          initialRoute={{ id: 'principal' }}
          renderScene={(route, navigator) => {
            switch (route.id) {
              case 'principal':
                return (<CenaPrincipal navigator={navigator} />);
              case 'cliente':
                return (<CenaClientes navigator={navigator} />);
              case 'contato':
                return (<CenaContatos navigator={navigator} />);
              case 'empresa':
                return (<CenaEmpresa navigator={navigator} />);
              case 'servicos':
                return (<CenaServicos navigator={navigator} />);
              default:
                return false;
            }
          }}
        />
    );
  }
}

AppRegistry.registerComponent('app5', () => App);
