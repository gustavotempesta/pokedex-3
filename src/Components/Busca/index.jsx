import React, { useState } from 'react';
import styled from 'styled-components';
import { usePokemonContext } from '../../common/context/Pokemon';

const Form = styled.form`
    width: 100%;
    padding: 21.13px 0 0 0;
    margin: 0 auto;
`;

const InputBusca = styled.input`
    display: inline-block;
    width: 751px;
    padding: 14px 22px 15px 22px;
    box-sizing: border-box;
    background: #FFFFFF;
    border: none;
    border-radius: 10px;
    color: #AFAFAF;
    font-size: 14px;
    line-height: 16px;
`;

const BotaoBusca = styled.button`
    background: #3763AD;
    width: 109px;
    padding: 14px 0;
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    color: #FFCB05;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
`;

function Busca() {
    const {filtro, setFiltro, executaBusca} = usePokemonContext();
    
    return ( 
        <Form onSubmit={(event) => {
            event.preventDefault();
            executaBusca(filtro);            
        }}>
            
            <InputBusca
                onChange={(event) => {
                    setFiltro(event.target.value);
                }}
                type="text" 
                id="pesquisa" 
                placeholder="Digite o nome do Pokémon" 
                required=""
            />
            
            <BotaoBusca>
                Buscar
            </BotaoBusca>

        </Form>
    );
}

export default Busca;