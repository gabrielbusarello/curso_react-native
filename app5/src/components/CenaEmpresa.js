import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    Text,
    StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

import detalheEmpresa from '../assets/detalhe_empresa.png';

export default class CenaEmpresa extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar 
                // hidden
                backgroundColor='#EC7148'
            />
            <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#EC7148' />

            <View style={styles.cabecalho}>
                <Image source={detalheEmpresa} />
                <Text style={styles.txtTitulo}>A Empresa</Text>
            </View>
            <View style={styles.detalheEmpresa}>
                <Text style={styles.txtEmpresa}>Lorem ipsum dolorem sit amet, dolorem sit amet ipsum dolorem sit</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo: {
        fontSize: 30,
        color: '#EC7148',
        marginTop: 25,
        marginLeft: 10
    },
    detalheEmpresa: {
        marginTop: 20,
        padding: 20
    },
    txtEmpresa: {
        fontSize: 18
    }
});
