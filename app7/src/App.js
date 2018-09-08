import React, { Component } from 'react';
import { View } from 'react-native';

import { Topo, Resultado, Painel } from './components';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = { num1: '', num2: '', operacao: 'soma', resultado: '' };

        // Desloca o contexto da função. Como o calcular está sendo chamado no Componente comando,
        // ele iria buscar os states do componente comando e não do painel.
        // Com essa linha podemos preservar esse comportamento.
        this.calcular = this.calcular.bind(this);
        this.atualizaValor = this.atualizaValor.bind(this);
        this.atualizaOperacao = this.atualizaOperacao.bind(this);
    }

    calcular() {
        let resultado;
        if (this.state.operacao === 'soma') {
            resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        } else if (this.state.operacao === 'subtracao') {
            resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
        } else {
            resultado = 0;
        }
        this.setState({ resultado: resultado.toString() });
    }

    atualizaValor(nome, numero) {
        const obj = {};
        obj[nome] = numero;
        this.setState(obj);
    }

    atualizaOperacao(operacao) {
        this.setState({ operacao });
    }

    render() {
        return (
            <View>
                <Topo />
                <Resultado resultado={this.state.resultado} />
                <Painel
                    num1={this.state.num1}
                    num2={this.state.num2}
                    operacao={this.state.operacao}
                    calcular={this.calcular}
                    atualizaValor={this.atualizaValor}
                    atualizaOperacao={this.atualizaOperacao}
                />
            </View>
        );
    }
}
