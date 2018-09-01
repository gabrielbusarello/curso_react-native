import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

import logo from '../assets/logo.png';
import menuCliente from '../assets/menu_cliente.png';
import menuContato from '../assets/menu_contato.png';
import menuEmpresa from '../assets/menu_empresa.png';
import menuServico from '../assets/menu_servico.png';

export default class CenaPrincipal extends Component {
  render() {
    return (
        <View>
            <StatusBar 
                // hidden
                backgroundColor='#CCC'
            />
            <BarraNavegacao />
            <View style={styles.logo}>
                <Image source={logo} />
            </View>
            <View style={styles.menu}>
                <View style={styles.menuGrupo}>
                    <TouchableHighlight
                        onPress={() => {
                            this.props.navigator.push({ id: 'b' });
                        }}
                    >
                        <Image style={styles.imgMenu} source={menuCliente} />
                    </TouchableHighlight>

                    <Image style={styles.imgMenu} source={menuContato} />
                </View>
                <View style={styles.menuGrupo}>
                    <Image style={styles.imgMenu} source={menuEmpresa} />
                    <Image style={styles.imgMenu} source={menuServico} />
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        alignItems: 'center'
    },
    menu: {
        alignItems: 'center'
    },
    menuGrupo: {
        flexDirection: 'row'
    },
    imgMenu: {
        margin: 15
    }
});
