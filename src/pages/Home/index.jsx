import React from 'react';
import styled from 'styled-components';
import Busca from '../../components/Busca';
import ListaPokemon from '../../compositions/ListaPokemon';

const ConteudoHome = styled.div`
    width: 870px;    
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
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