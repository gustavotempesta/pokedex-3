import React from 'react';
import styled from 'styled-components';
import CardPokemon from '../CardPokemon';

const Lista = styled.ul`
    padding: 40px 0 0 98px;
    width: 1080px;
    margin: 0 auto;
`;

const ListaItem = styled.li`
    list-style: none;
`;

function ListaPokemon() {
    return ( 
        <Lista>
            <ListaItem>
                <CardPokemon/>
            </ListaItem>
        </Lista>
     );
}

export default ListaPokemon;