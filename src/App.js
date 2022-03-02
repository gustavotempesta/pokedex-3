import React from 'react';

import GlobalStyle from "./components/GlobalStyle";
import Cabecalho from './compositions/Cabecalho';
import PokemonProvider from './common/context/Pokemon';
import Detalhes from './pages/Detalhes';
import Favoritos from './pages/Favoritos';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';


function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Cabecalho />
        <PokemonProvider>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detalhes/:nome">
            <Detalhes />
          </Route>
          <Route path="/favoritos">
            <Favoritos />
          </Route>
        </PokemonProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
