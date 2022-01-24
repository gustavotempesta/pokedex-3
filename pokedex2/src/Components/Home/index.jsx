import React from 'react';
import Cabecalho from '../Cabecalho';
import ListaPokemon from '../ListaPokemon';
import Busca from '../Busca'

function Home() {
    return ( 
        <>
            <Cabecalho/>
            <Busca/>
            <ListaPokemon/>
        </>
     );
}

export default Home;