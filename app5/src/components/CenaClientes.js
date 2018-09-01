import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    Text,
    StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

import detalheCliente from '../assets/detalhe_cliente.png';
import cliente1 from '../assets/cliente1.png';
import cliente2 from '../assets/cliente2.png';

export default class CenaClientes extends Component {
  render() {
    return (
        <View>
            <StatusBar 
                // hidden
                backgroundColor='#B9C941'
            />
            <BarraNavegacao voltar />

            <View style={styles.cabecalho}>
                <Image source={detalheCliente} />
                <Text style={styles.txtTitulo}>Nossos Clientes</Text>
            </View>
            <View style={styles.detalheCliente}>
                <Image source={cliente1} />
                <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
            </View>
            <View style={styles.detalheCliente}>
                <Image source={cliente2} />
                <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
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
        color: '#B9C941',
        marginTop: 25,
        marginLeft: 10
    },
    detalheCliente: {
        padding: 20,
        marginTop: 10
    },
    txtDetalheCliente: {
        marginLeft: 20,
        fontSize: 18
    }
});
