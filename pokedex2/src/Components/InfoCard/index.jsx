import React from 'react';
import styled from 'styled-components';

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
    margin: 22px 15px 0 34px;
`;

const Voltar = styled.button`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    width: 13px;
    padding: 0px;
    color: #FFFFFF;
    background: none;
    border: none;
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

function InfoCard(props) {

    var numero = String(props.id);
    var contadorDigitos = numero.length;
    while(contadorDigitos < 3){
        numero = "0" + numero;
        contadorDigitos ++;
    }

    return (
        <Caixa>

            <CaixaTitulo>
                <Voltar 
                    onClick={() => {
                        props.voltar();
                    }}>
                    {"<"} 
                </Voltar>
                <section>
                    <NomePokemon>{props.name}</NomePokemon>
                    <NumeroPokemon>
                        #{numero}
                    </NumeroPokemon>
                </section>
                <Voltar> {""} </Voltar>
            </CaixaTitulo>

            <Elipse>
                <ImagemPokemon src={props.image}/>
            </Elipse>

            <CaixaInfo>
                <PesoAltura>{props.weight}{props.weightunit} <br/> Weight</PesoAltura>       
                <Tipo>{props.type} <br/> Type</Tipo>
                <PesoAltura>{props.height}{props.heightunit}<br/> Height</PesoAltura>
            </CaixaInfo>

        </Caixa>
     );
}

export default InfoCard;
