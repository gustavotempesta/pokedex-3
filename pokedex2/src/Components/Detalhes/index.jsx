import React from 'react';
import styled from 'styled-components';
import InfoCard from '../InfoCard';
import Info from '../Info';

const ConteudoDetalhes = styled.div`
    width: 1080px;    
    padding: 63.13px 0 0 91px;
    margin: 0 auto;
`;

const Card = styled.div`
    width: 877px;
    height: 436px;
    border-radius: 25px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    // a cor deve ser de acordo com o tipo

    background: #48D0B0;

    // definir espaçamentos padronizados e o fundo deve ser da cor do tipo
`;

function Detalhes() {
    return ( 
        <ConteudoDetalhes>
            <Card>
                <InfoCard/>
                <Info/>
            </Card>
        </ConteudoDetalhes>
     );
}

export default Detalhes;