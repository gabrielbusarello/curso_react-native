import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

const formCadastro = props => (
    <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 4, justifyContent: 'center' }}>
            <TextInput value={ props.nome } style={{ fontSize: 20, height: 45 }} placeholder="Nome" />
            <TextInput value={ props.email } style={{ fontSize: 20, height: 45 }} placeholder="Email" />
            <TextInput value={ props.senha } style={{ fontSize: 20, height: 45 }} placeholder="Senha" />
        </View>
        <View style={{ flex: 1 }}>
            <Button title="Cadastrar" color="#115E54" onPress={() => false} />
        </View>
    </View>
);

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
);

export default connect(mapStateToProps, null)(formCadastro);