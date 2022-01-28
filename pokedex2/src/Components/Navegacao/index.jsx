import React, { useState } from 'react';
import Detalhes from '../Detalhes';
import Home from '../Home';

function Navegacao() {
    const [paginaAtual,setPaginaAtual] = useState(0);
    const [nomePokemon,setNomePokemon] = useState("");

    function paginaDetalhes(nome) {
        setNomePokemon(nome);
        setPaginaAtual(1);
    }

    function voltar() {
        setPaginaAtual(0);
    }

    const paginas = [
        <Home paginaDetalhes={paginaDetalhes}/>,
        <Detalhes nome={nomePokemon} voltar={voltar}/>
    ] 

    return (
        <> 
            {paginas[paginaAtual]}
        </>
     );
}

export default Navegacao;