import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    padding: 22px 15px;
    display: inline-block;
    width: 181px;
    height: 253px;
    text-align: center;
    margin: 0 6% 6% 0;
    vertical-align: middle;
    box-sizing: border-box;
    border-radius: 25px;
    
    // a cor deve ser de acordo com o tipo

    background: #48D0B0;
`;

const NomePokemon = styled.h1`
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    color: #FFFFFF;
`;
const NumeroPokemon = styled.h2`
    margin-top: 3px;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.42);
`;

const Elipse = styled.div`
    margin-top: 16px;
    width: 151px;
    height: 151px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
`;

const ImagemPokemon = styled.img`
    padding: 15px;
    width: 122px;
    height: 122px
`;

// Quando chamado pelo Detalhes precisa exibir peso, tipo e altura, pelo Menu não

function CardPokemon() {
    return ( 
        <Card>
            <NomePokemon>Nome Pokemon</NomePokemon>
            <NumeroPokemon>Numero Pokemon</NumeroPokemon>
            <Elipse>
                {/* Vai receber a imagem do Pokemon de acordo com a API */}
                <ImagemPokemon />
            </Elipse>
        </Card>
     );
}

export default CardPokemon;
