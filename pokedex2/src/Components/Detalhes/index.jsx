import React from 'react';
import styled from 'styled-components';
import CardPokemon from '../CardPokemon';
import Info from '../Info';

const ConteudoDetalhes = styled.div`
    // definir espaçamentos padronizados e o fundo deve ser da cor do tipo
`;

function Detalhes() {
    return ( 
        <ConteudoDetalhes>
            <CardPokemon/>
            <Info/>
        </ConteudoDetalhes>
     );
}

export default Detalhes;