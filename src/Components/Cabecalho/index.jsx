import React from 'react';
import logo from "../../assets/img/logo.svg";
import styled from "styled-components";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    width: 870px;
    margin: 0 auto;
`;

const Menu = styled.div`
    margin-top: 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    color: #3763AD;
    width: 150px;
`;

const Favoritos = styled.a`
    text-decoration: underline;
    font-size: 15px;
`;

const Logo = styled.img`
    margin: 27px 0 0 ;
    width: 186.39px;
    height: 66.87px;
`;

function Cabecalho () {
    return ( 
        <Header>
            <Menu></Menu>
            <Logo src={logo} alt="Logo Pokémon"/>
            <Menu>
            ❤ <Favoritos>Meus Favoritos</Favoritos>
            </Menu>
        </Header>
     );
};

export default Cabecalho ;