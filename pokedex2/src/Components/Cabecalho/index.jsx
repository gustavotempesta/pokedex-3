import React from 'react';
import logo from "../../assets/img/logo.svg";
import styled from "styled-components";

const Header = styled.header`
    padding: 27px 0 0 ;
    display: flex;
    justify-content: center;
    width: 1080px;
    margin: 0 auto;
`;

const Logo = styled.img`
    width: 186.39px;
    height: 66.87px;

`;

function Cabecalho () {
    return ( 
        <Header>
            <Logo src={logo} alt="Logo Pokémon"/>
        </Header>
     );
};

export default Cabecalho ;