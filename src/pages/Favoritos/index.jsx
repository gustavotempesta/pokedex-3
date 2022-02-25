import React from 'react';
import styled from 'styled-components';
import { useFavoritosContext } from '../../common/context/Favoritos';
import CardPokemon from '../../Components/CardPokemon';

const Conteudo = styled.div`
    width: 870px;    
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
const CaixaTitulo = styled.div`
    width: 100%;
    padding: 21.13px 0 0 0;
    margin-left: 18px;
`;

const Titulo = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 29px;
    color: #3763AD;
`;

const Lista = styled.div`
    padding: 22px 0 0 0;
    width: 870px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start; 

    .invisivel{
        display: none;
    }
`;


function Favoritos() {
    const { favorito } = useFavoritosContext();

    return (
        <Conteudo>
            <CaixaTitulo>
                <Titulo>Meus Favoritos</Titulo>
            </CaixaTitulo>
            <Lista>
                {favorito.map(({ id, name, image, type }) => {
                    return (
                        <CardPokemon key={id} id={id} name={name} image={image} type={type} />
                    );
                })}
            </Lista>
        </Conteudo>

    );
}

export default Favoritos;