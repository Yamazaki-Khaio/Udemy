// Importando CSS Módulo    
import styles from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'



export default function Estiloso() {
    return (
        <Layout >

        <div className={styles.roxo}>
            <h1>Estiloso</h1>
            <h2>Exemplo de um CSS Módulo</h2>
        </div>

        </Layout>


    )
}
