import { StyleSheet, Text, View, Button, AppRegistry } from 'react-native';
import React, { Component } from 'react';

import Topo from './src/components/topo';
import Icone from './src/components/icone';


class app3 extends Component {

    constructor(props) {
        super(props);
        this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
    }

    jokenpo(escolhaUsuario) {
        // Gerar número aleatório (0, 1, 2)
        const numAleatorio = Math.floor(Math.random() * 3);

        const escolhaComputador = ['pedra', 'papel', 'tesoura'];

        let resultado = '';

        if (escolhaComputador[numAleatorio] === 'pedra') {
            if (escolhaUsuario === 'pedra') {
                resultado = 'Empate';
            } else if (escolhaUsuario === 'papel') {
                resultado = 'Você Ganhou';
            } else {
                resultado = 'Você Perdeu';
            }
        } else if (escolhaComputador[numAleatorio] === 'papel') {
            if (escolhaUsuario === 'pedra') {
                resultado = 'Você Perdeu';
            } else if (escolhaUsuario === 'papel') {
                resultado = 'Empate';
            } else {
                resultado = 'Você Ganhou';
            }
        } else if (escolhaUsuario === 'pedra') {
                resultado = 'Você Ganhou';
            } else if (escolhaUsuario === 'papel') {
                resultado = 'Você Perdeu';
            } else {
                resultado = 'Empate';
            }

        this.setState({ escolhaUsuario, escolhaComputador: escolhaComputador[numAleatorio], resultado });
    }

    render() {
        return (
        <View>
            <Topo />
            <View style={styles.painelAcoes} >
                <View style={styles.btnEscolha}>
                    <Button title='pedra' onPress={() => this.jokenpo('pedra')} />
                </View>
                <View style={styles.btnEscolha}>
                    <Button title='papel' onPress={() => this.jokenpo('papel')} />
                </View>
                <View style={styles.btnEscolha}>
                    <Button title='tesoura' onPress={() => this.jokenpo('tesoura')} />
                </View>
            </View>
            <View style={styles.palco}>
                <Text style={styles.txtResultado}>{ this.state.resultado }</Text>

                <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
                <Icone escolha={this.state.escolhaUsuario} jogador='Você' />
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    painelAcoes: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnEscolha: {
        width: 90
    },
    palco: {
        marginTop: 10,
        alignItems: 'center'
    },
    txtResultado: {
        height: 60,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ff0000'
    }
});


AppRegistry.registerComponent('app3', () => app3);
