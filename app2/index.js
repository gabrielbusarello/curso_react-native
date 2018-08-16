import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native';

const Estilos = {
    principal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    botao: {
        backgroundColor: '#538530',
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
};

const gerarNovaFrase = () => {
    const numeroAleatorio = Math.floor(Math.random() * 5);

    const frases = Array();
    frases.push('Maôe');
    frases.push('Glu Glu iêié');
    frases.push('Meu pintinho amarelinho');
    frases.push('Senhoras e Senhores, pessoas do meu Brasil varonil');
    frases.push('Oxe Loxe');

    Alert.alert(frases[numeroAleatorio]);
};

const App = () => {
    const { principal, botao, textoBotao } = Estilos;
    return (
        <View style={principal}>
            <Image source={require('./imgs/logo.png')} />
            <TouchableOpacity onPress={gerarNovaFrase} style={botao}>
                <Text style={textoBotao}>Nova Frase</Text>
            </TouchableOpacity>
        </View>
    );
};

AppRegistry.registerComponent('app2', () => App);
