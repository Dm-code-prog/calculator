import {ThemeProvider} from 'styled-components'
import GlobalStyle from './themes/GlobalStyle'
import Calculator from './Components/Calculator'
import { createContext, Provider } from 'react'
import React from 'react';

function App() {
  return (
        <>
          <GlobalStyle/>
          <Calculator/>
        </>
  );
}


export default App;
