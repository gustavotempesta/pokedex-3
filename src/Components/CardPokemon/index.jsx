import React from 'react';
import styled from 'styled-components';
import { corTipo } from '../Models/cores';
import { padronizaNumero } from '../Models/numero';
import coracao from "../../assets/img/coracao.svg";

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

    cursor: ${(props) => (props.pointer ? "pointer" : "default")};
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
                if (nome !== "") {
                    props.paginaDetalhes(nome);
                }
            }}
            id={props.name}
            className='card'
            style={{ background: cor }
            }>

            <CaixaTitulo>
                <Botao>
                {""}
                </Botao>
                <section>
                    <NomePokemon className='name'>
                        {props.name}
                    </NomePokemon>
                    <NumeroPokemon>
                        #{numero}
                    </NumeroPokemon>
                </section>
                <Botao pointer>
                <img src={coracao} alt="favoritar"/>
                </Botao>
            </CaixaTitulo>

            <Elipse id={props.name}>
                <ImagemPokemon src={props.image} />
            </Elipse>

        </Card>
    );
}

export default CardPokemon;
