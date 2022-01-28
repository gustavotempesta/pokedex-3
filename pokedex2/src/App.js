import React from 'react';

import GlobalStyle from "./Components/GlobalStyle";
import Cabecalho from './Components/Cabecalho';
import Navegacao from './Components/Navegacao';

function App() {
  return (
    <>
      <GlobalStyle />
      <Cabecalho/>
      <Navegacao/>
    </>
  );
}

export default App;
