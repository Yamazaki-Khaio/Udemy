import Link from "next/link";
import styles from '../styles/Layout.module.css'

export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <Link href="/">Voltar</Link>
                <h1>{props.titulo}</h1>
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>
            <div className={styles.rodape}>
                <h2>Rodapé</h2>
            </div>
        </div>
            );

}

