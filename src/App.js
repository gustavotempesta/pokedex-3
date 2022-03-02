import React from 'react';

import GlobalStyle from "./Components/GlobalStyle";
import Cabecalho from './Components/Cabecalho';
import PokemonProvider from './common/context/Pokemon';
import Home from './Components/Home';
import Detalhes from './Components/Detalhes';
import Favoritos from './pages/Favoritos';
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
