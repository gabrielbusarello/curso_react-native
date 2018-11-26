import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';
import { MODIFICA_ADICIONA_CONTATO_EMAIL, ADICIONA_CONTATO_ERRO, ADICIONA_CONTATO_SUCESSO, LISTA_CONTATO_USUARIO, MODIFICA_MENSAGEM, LISTA_CONVERSA_USUARIO, ENVIA_MENSAGEM_SUCESSO } from './Types';

export const modificaAdicionaContatoEmail = (texto) => {
    return {
        type: MODIFICA_ADICIONA_CONTATO_EMAIL,
        payload: texto
    };
}

export const adicionaContato = (email) => {

    return dispatch => {
        const emailB64 = b64.encode(email);
    
        firebase.database().ref(`/contatos/${emailB64}`)
            .once('value')
            .then(snapshot => {
                if (snapshot.val()) {
                    // email do contato que queremos adicionar
                    // .values tranforma um objeto em array! .first pega a primeira posição desse array.
                    const dadosUsuario = _.first(_.values(snapshot.val()));

                    // email do usuário autenticado
                    const { currentUser } = firebase.auth();
                    const emailUsuarioB64 = b64.encode(currentUser.email);

                    firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
                        .push({ email, nome: dadosUsuario.nome })
                        .then(() => adicionaContatoSucesso(dispatch))
                        .catch(erro => adicionaContatoErro(erro.message, dispatch));
                } else {
                    dispatch({ type: ADICIONA_CONTATO_ERRO, payload: 'E-mail informado não corresponde a um usuário válido!' })
                }
            });
    }
}

const adicionaContatoErro = (erro, dispatch) => {
    dispatch({ type: ADICIONA_CONTATO_ERRO, payload: erro });
}

const adicionaContatoSucesso = (dispatch) => {
    dispatch({ type: ADICIONA_CONTATO_SUCESSO, payload: true });
}

export const habilitaInclusaoContato = () => ({ type: ADICIONA_CONTATO_SUCESSO, payload: false });

export const contatosUsuarioFetch = () => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        const emailUsuarioB64 = b64.encode(currentUser.email);

        firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
            .on('value', snapshot => {
                dispatch({ type: LISTA_CONTATO_USUARIO, payload: snapshot.val() });
            });
    }
}

export const modificaMensagem = (texto) => {
    return {
        type: MODIFICA_MENSAGEM,
        payload: texto
    }
}

export const enviaMensagem = (mensagem, contatoNome, contatoEmail) => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        const emailUsuarioB64 = b64.encode(currentUser.email);
        const emailContatoB64 = b64.encode(contatoEmail);

        firebase.database().ref(`/mensagens/${emailUsuarioB64}/${emailContatoB64}`)
            .push({ mensagem, tipo: 'e' })
            .then(() => {
                firebase.database().ref(`/mensagens/${emailContatoB64}/${emailUsuarioB64}`)
                    .push({ mensagem, tipo: 'r' })
                    .then(() => dispatch({ type: ENVIA_MENSAGEM_SUCESSO }))
            })
            .then(() => {
                // Armazenar o cabeçalho de conversa do usuário autenticado
                firebase.database().ref(`/usuario_conversas/${emailUsuarioB64}/${emailContatoB64}`)
                    .set({ nome: contatoNome, email: contatoEmail })
            })
            .then(() => {
                // Armazenar o cabeçalho de conversa do contato
                firebase.database().ref(`/contatos/${emailUsuarioB64}`)
                    .once('value')
                    .then(snapshot => {
                        const dadosUsuario = _.first(_.values(snapshot.val()));
                        firebase.database().ref(`/usuario_conversas/${emailContatoB64}/${emailUsuarioB64}`)
                            .set({ nome: dadosUsuario.nome, email: currentUser.email })
                    })
            })
    }
}

export const conversaUsuarioFetch = (contatoEmail) => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        const emailUsuarioB64 = b64.encode(currentUser.email);
        const emailContatoB64 = b64.encode(contatoEmail);

        firebase.database().ref(`/mensagens/${emailUsuarioB64}/${emailContatoB64}`)
            .on('value', snapshot => {
                dispatch({ type: LISTA_CONVERSA_USUARIO, payload: snapshot.val() })
            });

    }
}
