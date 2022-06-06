import {ThemeProvider} from 'styled-components'
import GlobalStyle from './themes/GlobalStyle'
import Calculator from './Components/Calculator'
import { createContext, Provider } from 'react'
import React from 'react';


const Ctx = createContext(0)
function App() {
  const [result, setResult] = React.useState([[null, null, null], 0])
  return (
    <Ctx.Provider value={[result, setResult]}>
        <GlobalStyle/>
        <Calculator/>
    </Ctx.Provider>
  );
}

export {Ctx}

export default App;
