import React from 'react';
import styled from 'styled-components';
import Habilidades from '../Habilidades';

const Caixa = styled.div`
    display: inline-block;
    width: ${100-38.54}%;
    height: 100%;
    text-align: center;
    vertical-align: middle;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: 25px;
`;

const ConteudoCaixa = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    box-sizing: border-box;
    padding: 88px 29px;
`;

function Info() {
    return ( 
        <Caixa>
            <ConteudoCaixa>
                <Habilidades/>
                <Habilidades/>
                <Habilidades/>
                <Habilidades/>
                <Habilidades/>
                <Habilidades/>
            </ConteudoCaixa>
        </Caixa>
     );
}

export default Info;