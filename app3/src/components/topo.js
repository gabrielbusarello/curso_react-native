import { View, Image } from 'react-native';
import React, { Component } from 'react';

import imagem from '../../assets/jokenpo.png';

export default class Topo extends Component {
    render() {
        return (
            <View>
                <Image source={imagem} style={{ width: '100%' }} />
            </View>
        );
    }
}
