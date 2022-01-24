import React from 'react';
import ListaPokemon from '../ListaPokemon';
import Busca from '../Busca'
import styled from 'styled-components';

const ConteudoHome = styled.div`
    // definir espaçamentos padronizados
`;

function Home() {
    return ( 
        <ConteudoHome>
            <Busca/>
            <ListaPokemon/>
        </ConteudoHome>
     );
}

export default Home;