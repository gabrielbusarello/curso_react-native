import { StyleSheet, Text, View, Image } from 'react-native';
import React, { Component } from 'react';

import pedra from '../../assets/pedra.png';
import papel from '../../assets/papel.png';
import tesoura from '../../assets/tesoura.png';

export default class Icone extends Component {
    render() {
        if (this.props.escolha === 'pedra') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={pedra} />
                </View>
            );
        } else if (this.props.escolha === 'papel') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={papel} />
                </View>
            );
        } else if (this.props.escolha === 'tesoura') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={tesoura} />
                </View>
            );
        }

        return false;
    }
}

const styles = StyleSheet.create({
    icone: {
        alignItems: 'center',
        marginBottom: 20
    },
    txtJogador: {
        fontSize: 18
    }
});
