import React from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default props => (
    <ImageBackground style={{ flex: 1, padding: 15, width: null }} source={ require('../assets/bg.png') } >
        <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20, color: "#fff" }}>Seja Bem-Vindo!</Text>
            <Image source={ require('../assets/logo.png') } />
        </View>
        <View style={{ flex: 1 }}>
            <Button title="Fazer Login" onPress={() => Actions.formLogin()} />
        </View>
    </ImageBackground>
)
