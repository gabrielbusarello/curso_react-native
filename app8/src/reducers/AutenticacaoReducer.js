import { MODIFICA_NOME, MODIFICA_EMAIL, MODIFICA_SENHA, CADASTRO_USUARIO_ERRO, CADASTRO_USUARIO_SUCESSO, AUTENTICA_USUARIO_ERRO, CADASTRO_EM_ANDAMENTO, LOGIN_EM_ANDAMENTO } from '../actions/Types';

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: '',
    loadingCadastro: false,
    loadingLogin: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODIFICA_NOME:
            return { ...state, nome: action.payload };
        case MODIFICA_EMAIL:
            return { ...state, email: action.payload };
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload };
        case CADASTRO_USUARIO_ERRO:
            return { ...state, erroCadastro: action.payload, loadingCadastro: false };
        case CADASTRO_USUARIO_SUCESSO:
            return { ...state, nome: '', senha: '', loadingCadastro: false };
        case AUTENTICA_USUARIO_ERRO:
            return { ...state, erroLogin: action.payload, loadingLogin: false };
        case CADASTRO_EM_ANDAMENTO:
            return { ...state, loadingCadastro: true };
        case LOGIN_EM_ANDAMENTO:
            return { ...state, loadingLogin: true };
        default:
            return state;
    }
}
