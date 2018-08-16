import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const geraNumeroAleatorio = () => {
    const numeroAleatorio = Math.floor(Math.random() * 10);

    alert(numeroAleatorio);
};

const App = () => {
    return (
        <View>
            <Text>Gerador de números randômicos!!!</Text>
            <Button title="Gerar um número randômico" onPress={geraNumeroAleatorio} />
        </View>
    );
};

AppRegistry.registerComponent('app1', () => App);
