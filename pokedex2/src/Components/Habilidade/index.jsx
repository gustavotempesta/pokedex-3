import React from 'react';
import styled from 'styled-components';

const Itens = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

const Item = styled.p`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 16px;
    line-height: 19px;

    font-weight: bold;

    // usar props para alterar para bold quando for nome da habilidade 
    
`;

const Retangulo = styled.div`
    width: 320px;
    height: 7px;
    background: #C4C4C4;
`;

const RetanguloNivel = styled.div`
    width: ${75/100 * 320}px;
    height: 7px;
    background: #027FC5;
    
`

function Habilidade() {

    return ( 
        <Itens>
            <Item>Habilidade</Item>

            <Item>75</Item>

            <Retangulo>
            <RetanguloNivel/>
            </Retangulo>
            
        </Itens>
        
     );
}

export default Habilidade;