import React from 'react';
import ListaPokemon from '../ListaPokemon';
import Busca from '../Busca'
import styled from 'styled-components';

const ConteudoHome = styled.div`
    width: 870px;    
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
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