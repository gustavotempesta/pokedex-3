import React, { useEffect, useState } from 'react';
import Detalhes from '../Detalhes';
import Home from '../Home';

function Navegacao() {
    const [paginaAtual,setPaginaAtual] = useState(0);
    const [nomePokemon,setNomePokemon] = useState("");


    function paginaDetalhes(nome) {
        console.log(nome);
        setNomePokemon(nome);
        setPaginaAtual(1);
    }

    const paginas = [
        <Home paginaDetalhes={paginaDetalhes}/>,
        <Detalhes nome={nomePokemon} />
    ] 

    return (
        <> 
            {paginas[paginaAtual]}
        </>
     );
}

export default Navegacao;