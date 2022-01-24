import React from 'react';

import Home from './Components/Home';
import Detalhes from './Components/Detalhes'
import GlobalStyle from "./Components/GlobalStyle";
import Cabecalho from './Components/Cabecalho';

function App() {
  return (
    <>
      <GlobalStyle />
      <Cabecalho/>
      <Home/>
    </>
  );
}

export default App;
