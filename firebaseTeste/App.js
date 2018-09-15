import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

import firebase from 'firebase';

export default class App extends Component {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCF2Woa4VczWCCq6nem8wCCcB_fb7iiALM",
      authDomain: "configuracaofirebasereac-34085.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereac-34085.firebaseio.com",
      projectId: "configuracaofirebasereac-34085",
      storageBucket: "configuracaofirebasereac-34085.appspot.com",
      messagingSenderId: "215828995739"
    };
    firebase.initializeApp(config);
  }

  cadastrarUsuario() {
    let email = 'gabriel20053@gmail.com';
    let senha = 'gabriel123';

    const usuario = firebase.auth();

    usuario.createUserWithEmailAndPassword(
      email,
      senha
    ).catch((err) => {
      let mensagemErro = '';
      if (err.code === 'auth/weak-password') {
        mensagemErro = 'A senha precisa ter no mínimo 6 caracteres!';
      }
      alert(mensagemErro);
    });
  }

  verificarUsuarioLogado() {
    const usuario = firebase.auth();
    usuario.onAuthStateChanged((usuarioAtual) => {
      if (usuarioAtual) {
        alert('Usuário está logado!');
      } else {
        alert('Usuário não está logado!');
      }
    });
    /*const usuarioAtual = usuario.currentUser;

    if (usuarioAtual) {
      alert('Usuário está logado!');
    } else {
      alert('Usuário não está logado!');
    }*/
  }

  deslogarUsuario() {
    const usuario = firebase.auth();
    usuario.signOut();
  }

  logarUsuario() {
    let email = 'gabriel20053@gmail.com';
    let senha = 'gabriel123';

    const usuario = firebase.auth();
    usuario.signInWithEmailAndPassword(
      email,
      senha
    ).catch((err) => {
      alert(err.message);
    });
  }

  render() {
    return (
      <View>
        <Button
          onPress={() => this.cadastrarUsuario()}
          title="Cadastrar Usuário"
          color="#841584"
          accessibilityLabel="Cadastrar Usuário"
        />
        <Button
          onPress={() => this.verificarUsuarioLogado()}
          title="Verificar Usuário Logado"
          color="#841584"
          accessibilityLabel="Verificar Usuário Logado"
        />
        <Button
          onPress={() => this.logarUsuario()}
          title="Logar Usuário"
          color="#841584"
          accessibilityLabel="Logar Usuário"
        />
        <Button
          onPress={() => this.deslogarUsuario()}
          title="Deslogar Usuário"
          color="#841584"
          accessibilityLabel="Deslogar Usuário"
        />
      </View>
    );
  }

  /*salvarDados() {
    let funcionarios = firebase.database().ref('funcionarios');
    // database.ref('pontuacao').set(200');
    // database.ref('pontuacao').remove();

    // funcionarios.push().child('nome').set('Gabriel');
    // funcionarios.child('002').remove();
    // funcionarios.remove();

    funcionarios.push().set({ nome: 'Gabriel', altura: '1,70', peso: '74KG' });
  }

  listarDados() {
    let pontuacao = firebase.database().ref('pontuacao');

    pontuacao.on('value', (snapshot) => {
      this.setState({ pontuacao: snapshot.val() });
    });
  }*/
}
