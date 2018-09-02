import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './components/Principal';
import Resultado from './components/Resultado';
import SobreJogo from './components/SobreJogo';
import OutrosJogos from './components/OutrosJogos';

const Rotas = () => (
    <Router>
        <Scene key='root'>
            <Scene key='principal' component={Principal} title="Cara ou Coroa" initial />
            <Scene key='resultado' component={Resultado} title="Resultado" />
            <Scene key='sobrejogo' component={SobreJogo} title='Sobre o Jogo' />
            <Scene key='outrosjogos' component={OutrosJogos} title='Outros Jogos' />
        </Scene>
    </Router>
);

export default Rotas;
