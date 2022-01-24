import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    padding: 21.13px 0 0 98px;
    width: 1080px;
    margin: 0 auto;
`;

const InputBusca = styled.input`
    display: inline-block;
    width: 70%;
    padding: 14px 22px 15px 22px;
    background: #FFFFFF;
    border: none;
    border-radius: 10px;
    color: #AFAFAF;
    font-size: 14px;
    line-height: 16px;
`;

const BotaoBusca = styled.button`
    background: #3763AD;
    width: 10%;
    padding: 14px 0;
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    color: #FFCB05;
    font-size: 18px;
    font-weight: bold;
`;

function Busca() {
    return ( 
        <Form>
            <InputBusca type="text" id="pesquisa" placeholder="Digite o nome do Pokémon" class="input-busca" required=""/>
            <BotaoBusca>
                Buscar
            </BotaoBusca>
        </Form>
     );
}

export default Busca;