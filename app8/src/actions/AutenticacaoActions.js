import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import { MODIFICA_NOME, MODIFICA_EMAIL, MODIFICA_SENHA, CADASTRO_USUARIO_ERRO, CADASTRO_USUARIO_SUCESSO, AUTENTICA_USUARIO_ERRO, AUTENTICA_USUARIO_SUCESSO, CADASTRO_EM_ANDAMENTO, LOGIN_EM_ANDAMENTO } from './Types';

export const modificaNome = (texto) => {
    return {
        type: MODIFICA_NOME,
        payload: texto
    };
}

export const modificaEmail = (texto) => {
    return {
        type: MODIFICA_EMAIL,
        payload: texto
    };
}

export const modificaSenha = (texto) => {
    return {
        type: MODIFICA_SENHA,
        payload: texto
    };
}

export const cadastraUsuario = ({ nome, email, senha }) => {
    return dispatch => {
        dispatch({ type: CADASTRO_EM_ANDAMENTO });

        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => {
                const emailB64 = b64.encode(email);

                firebase.database().ref(`/contatos/${emailB64}`)
                    .push({ nome })
                    .then(value => cadastraUsuarioSucesso(dispatch));

            })
            .catch(erro => cadastraUsuarioErro(erro, dispatch));
    }
}

export const autenticaUsuario = ({ email, senha }) => {
    return dispatch => {
        dispatch({ type: LOGIN_EM_ANDAMENTO });

        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(value => autenticaUsuarioSucesso(dispatch))
            .catch(erro => autenticaUsuarioErro(erro, dispatch));
    }
}

// Dispatchs das Promises.
const cadastraUsuarioSucesso = (dispatch) => {
    dispatch ({ type: CADASTRO_USUARIO_SUCESSO });
    Actions.boasVindas();
}

const cadastraUsuarioErro = (erro, dispatch) => {
    dispatch ({ type: CADASTRO_USUARIO_ERRO, payload: erro.message });
}

const autenticaUsuarioSucesso = (dispatch) => {
    dispatch ({ type: AUTENTICA_USUARIO_SUCESSO });
    Actions.principal();
}

const autenticaUsuarioErro = (erro, dispatch) => {
    dispatch ({ type: AUTENTICA_USUARIO_ERRO, payload: erro.message });
}
