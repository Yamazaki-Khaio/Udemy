import React from 'react'
import Navegador from '../components/Navegador'


export default function Inicio() {
    return (
        <div>
            <Navegador texto="Estiloso" destino="/estiloso" cor="7Ed957" />
            <Navegador texto="Exemplo" destino="/exemplo" cor="#7Ed957" />
            <Navegador texto="JSX" destino="/jsx" cor="#7Ed957" />
            <Navegador texto="Componente com Estado" destino="/estado" cor="7Ed957" />
            <Navegador texto="Integração com API #01" destino="/integra1" cor="7Ed957" />
            <Navegador texto="Clinte" destino="/cliente/" cor="7Ed957" />
            <Navegador texto="Conteúdo Estático" destino="/estatico" cor="7Ed957" />
            <Navegador texto="Conteúdo Dinâmico" destino="/dinamico" cor="#7Ed957" />

        </div>
    )

}

