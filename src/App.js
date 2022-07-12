import React from 'react'
import './App.css'

// components
import ComponenteUm from './components/ComponenteUm'
import ComponenteDois from './components/ComponenteDois'
import ComponenteTres from './components/ComponenteTres'
import ComponenteQuatro from "./components/ComponenteQuatro";

function App() {
    return (
        <>
            <ComponenteQuatro titulo="Componente Quatro">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </ComponenteQuatro>
            <ComponenteTres titulo="teste" subtitulo="Texto do componente 3"/>
            <ComponenteDois />
            <ComponenteUm />  
        </>
    )
}

export default App