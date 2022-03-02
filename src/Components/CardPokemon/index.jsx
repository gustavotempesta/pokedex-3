import React from 'react';
import styled from 'styled-components';
import { corTipo } from '../Models/cores';
import { padronizaNumero } from '../Models/numero';
import { Link } from 'react-router-dom';
import { usePokemonContext } from '../../common/context/Pokemon';

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
    cursor: pointer;
`;

const CaixaTitulo = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Botao = styled.button`
    width: 20px;
    height: 23px;
    background: none;
    border: none;
    padding: 0px;

    cursor: ${(props) => (props.grab ? "grab" : "pointer")};
`;

const NomePokemon = styled.h1`
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    color: #FFFFFF;
    text-transform: capitalize;
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
    height: 122px;
`;

function CardPokemon({ type, id, name, image }) {

    const cor = corTipo(type);
    const numero = padronizaNumero(String(id));

    const {toggleFavorito, iconeFavorito} = usePokemonContext();

    return (
        <div>
            <Link to={`/detalhes/${name}`}>
                <Card
                    id={name}
                    style={{ background: cor }}
                >

                    <CaixaTitulo>
                        <Botao>
                            {""}
                        </Botao>
                        <section>
                            <NomePokemon>
                                {name}
                            </NomePokemon>
                            <NumeroPokemon>
                                #{numero}
                            </NumeroPokemon>
                        </section>
                        <Botao grab
                            onClick={(event)=>{
                                event.preventDefault();
                                toggleFavorito({id, name, image, type})
                            }}
                        >
                            {iconeFavorito(id)}
                        </Botao>
                    </CaixaTitulo>

                    <Elipse id={name}>
                        <ImagemPokemon src={image} />
                    </Elipse>
                </Card>
            </Link>
        </div>
    );
}

export default CardPokemon;
