import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default props => (
    <TextInput
        style={styles.numero}
        value={props.num}
        onChangeText={valorCampo => props.atualizaValor(props.nome, valorCampo)}
    />
);

const styles = StyleSheet.create({
    numero: {
        width: 140,
        height: 80,
        fontSize: 20
    }
});
