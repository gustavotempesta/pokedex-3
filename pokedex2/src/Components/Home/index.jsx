import React from 'react';
import ListaPokemon from '../ListaPokemon';
import Busca from '../Busca'
import styled from 'styled-components';

const ConteudoHome = styled.div`
    // definir espaçamentos padronizados
`;

function Home(props) {
    return ( 
        <ConteudoHome>
            <Busca/>
            <ListaPokemon {...props}/>
        </ConteudoHome>
     );
}

export default Home;