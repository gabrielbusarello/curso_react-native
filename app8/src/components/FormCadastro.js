import React, { Component } from 'react';
import { View, TextInput, Button, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { modificaNome, modificaEmail, modificaSenha, cadastraUsuario } from '../actions/AutenticacaoActions';

class FormCadastro extends Component {

    _cadastraUsuario() {
        const { nome, email, senha } = this.props;

        this.props.cadastraUsuario({ nome, email, senha })
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1, width: null }} source={ require('../assets/bg.png') } >
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <TextInput value={ this.props.nome } style={{ fontSize: 20, height: 45 }} placeholder="Nome" placeholderTextColor="#fff" onChangeText={ texto => this.props.modificaNome(texto) } />
                        <TextInput value={ this.props.email } style={{ fontSize: 20, height: 45 }} placeholder="Email" placeholderTextColor="#fff" onChangeText={ texto => this.props.modificaEmail(texto) } />
                        <TextInput secureTextEntry value={ this.props.senha } style={{ fontSize: 20, height: 45 }} placeholder="Senha" placeholderTextColor="#fff" onChangeText={ texto => this.props.modificaSenha(texto) } />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button title="Cadastrar" color="#115E54" onPress={() => this._cadastraUsuario()} />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
);

export default connect(mapStateToProps, { modificaNome, modificaEmail, modificaSenha, cadastraUsuario })(FormCadastro);