import React from 'react';
import styled from 'styled-components';
import { corTipo } from '../Models/cores';
import { padronizaNumero } from '../Models/numero';

const Card = styled.div`
    display: inline-block;
    margin: 18px;
    width: 181px;
    height: 253px;
    text-align: center;
    padding: 22px 15px;
    vertical-align: middle;
    box-sizing: border-box;
    border-radius: 25px;
`;

const NomePokemon = styled.h1`
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    color: #FFFFFF;
    text-transform: capitalize;
    cursor: pointer;
`;
const NumeroPokemon = styled.h2`
    margin-top: 3px;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.42);
    cursor: pointer;
`;

const Elipse = styled.div`
    margin-top: 16px;
    width: 151px;
    height: 151px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    cursor: pointer;
`;

const ImagemPokemon = styled.img`
    padding: 15px;
    width: 122px;
    height: 122px;
`;

function CardPokemon(props) {

    var cor = corTipo(props.type);
    var numero = padronizaNumero(String(props.id));

    return ( 
        <Card 
            onClick={(event) => {
                var nome = event.target.parentNode.id;
                if(nome !== ""){
                    props.paginaDetalhes(nome);
                }
            }}
            id={props.name} 
            className='card' 
            style={{background: cor} 
        }>

            <NomePokemon className='name'>
                {props.name}
            </NomePokemon>

            <NumeroPokemon>
                #{numero}
            </NumeroPokemon>
            
            <Elipse id={props.name}>
                <ImagemPokemon src = {props.image}/>
            </Elipse>
            
        </Card>
     );
}

export default CardPokemon;
