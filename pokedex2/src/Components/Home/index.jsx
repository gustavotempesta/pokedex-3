import React from 'react';
import ListaPokemon from '../ListaPokemon';
import Busca from '../Busca'

function Home(props) {
    return ( 
        <>
            <Busca/>
            <ListaPokemon {...props}/>
        </>
     );
}

export default Home;