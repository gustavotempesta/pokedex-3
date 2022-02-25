import React from 'react';
import logo from "../../assets/img/logo.svg";
import styled from "styled-components";
import { Link } from 'react-router-dom';

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

const Favoritos = styled.span`
    font-size: 15px;
    :active: none;
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
            <Link to={"/"}>
                <Logo src={logo} alt="Logo Pokémon"/>
            </Link>
            <Menu>
            ❤ <Link to={"/favoritos"}><Favoritos>Meus Favoritos</Favoritos></Link>
            </Menu>
        </Header>
     );
};

export default Cabecalho ;