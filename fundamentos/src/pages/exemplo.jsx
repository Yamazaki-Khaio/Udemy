import Cabecalho from '../components/Cabechalho'
import React from 'react'
import styles from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'

export default function Exemplo() {
    return (

        <Layout titulo="Exemplo de JSX">
            <Cabecalho titulo="Next.js & React" subtitulo="Aprenda Next na prática!" />   
        </Layout>
    )
}

