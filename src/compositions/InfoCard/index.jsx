import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { usePokemonContext } from '../../common/context/Pokemon';

const Caixa = styled.div`
    display: inline-block;
    width: 38.54%;
    height: 100%;
    text-align: center;
    vertical-align: middle;
    box-sizing: border-box;
    border-radius: 25px;
`;

const CaixaTitulo = styled.div`
    height: 65.64px;
    display: flex;
    justify-content: space-between;
    margin: 22px 32px 0;
`;

const Botao = styled.button`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    width: 35px;
    heigh: 30px;
    padding: 0px;
    color: #FFFFFF;
    background: none;
    border: none;
    cursor: ${(props) => (props.grab ? "grab" : "pointer")};
`;

const NomePokemon = styled.h1`
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    color: #FFFFFF;
    text-transform: capitalize;
`;

const NumeroPokemon = styled.h2`
    margin-top: 4.69px;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.42);
`;

const Elipse = styled.div`
    margin: 21.36px 0 0 55px;
    width: 236px;
    height: 236px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
`;

const ImagemPokemon = styled.img`
    padding: 22px;
    width: 190.68px;
    height: 190.68px;
`;

const CaixaInfo = styled.div`
    width: 259px;
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 26px auto 0;
`;

const PesoAltura = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
`;

const Tipo = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-transform: capitalize;
    color: #FFFFFF;
`;

function InfoCard({id, name, image, weight, weightunit, type, height, heightunit }) {

    const history = useHistory();
    const {toggleFavorito, iconeFavorito} = usePokemonContext();

    return (
        <Caixa>

            <CaixaTitulo>
                <Botao onClick={()=>{
                    history.goBack();
                }}>
                    {"<"}
                </Botao>
                <section>
                    <NomePokemon>{name}</NomePokemon>
                    <NumeroPokemon>#{String(id).padStart(3,"0")}</NumeroPokemon>
                </section>
                <Botao grab
                    onClick={(event) =>{
                        event.preventDefault();
                        toggleFavorito({id, name, image, type})
                    }}
                > 
                    {iconeFavorito(id)}
                </Botao>
            </CaixaTitulo>

            <Elipse>
                <ImagemPokemon src={image}/>
            </Elipse>

            <CaixaInfo>
                <PesoAltura>
                    {weight}{weightunit}<br/> Weight
                </PesoAltura>       
                <Tipo>
                    {type} <br/> Type
                </Tipo>
                <PesoAltura>
                    {height}{heightunit}<br/> Height
                </PesoAltura>
            </CaixaInfo>

        </Caixa>
     );
}

export default InfoCard;
