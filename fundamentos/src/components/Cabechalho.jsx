import Layout from "./Layout"
export default function Cabecalho(props) {
    return (
        <div>
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
        </div>
    )
}