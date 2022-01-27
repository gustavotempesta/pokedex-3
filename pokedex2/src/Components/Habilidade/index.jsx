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

const Nome = styled.p`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 16px;
    line-height: 19px;
    width: 125px;

    font-weight: bold;
    text-transform: capitalize;

    // unir Nome com valor e usar props para alterar para bold quando for nome da habilidade e tamanho
    // substituir hifen por espaço
    
`;

const Valor = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    line-height: 19px;
    width: 18px;   
`

const Retangulo = styled.div`
    width: 320px;
    height: 7px;
    background: #C4C4C4;
`;

const RetanguloNivel = styled.div`
    height: 7px;
    background: #027FC5;
`;

function Habilidade(props) {
    let valor = props.value;
    return ( 
        <Itens>
            <Nome>{props.name}</Nome>

            <Valor>{props.value}</Valor>

            <Retangulo>
                <RetanguloNivel style={{ width: (valor)/100*320 + "px"}}/>
            </Retangulo>
            
        </Itens>
    );
}

export default Habilidade;