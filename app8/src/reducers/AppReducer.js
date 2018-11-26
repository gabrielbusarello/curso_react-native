import { MODIFICA_ADICIONA_CONTATO_EMAIL, ADICIONA_CONTATO_ERRO, ADICIONA_CONTATO_SUCESSO, MODIFICA_MENSAGEM, ENVIA_MENSAGEM_SUCESSO } from '../actions/Types';

const INITIAL_STATE = {
    adicionaContatoEmail: '',
    cadastroResultadoTxtErro: '',
    cadastroResultadoInclusao: false,
    mensagem: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MODIFICA_ADICIONA_CONTATO_EMAIL:
            return { ...state, adicionaContatoEmail: action.payload };
        case ADICIONA_CONTATO_ERRO:
            return { ...state, cadastroResultadoTxtErro: action.payload }
        case ADICIONA_CONTATO_SUCESSO:
            return { ...state, cadastroResultadoInclusao: action.payload, adicionaContatoEmail: '' }
        case MODIFICA_MENSAGEM:
            return { ...state, mensagem: action.payload }
        case ENVIA_MENSAGEM_SUCESSO:
            return { ...state, mensagem: '' }
        default:
            return state;
    }
}
