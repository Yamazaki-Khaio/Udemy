import Layout from "../components/Layout"

export default function Jsx() {

    const subtitulo = "JSX é um conceito Central"


    return (
        <Layout titulo="Entendendo o JSX">
            <div>
                <h1>JSX é um conceito Central</h1>
                <h2>{subtitulo}</h2>
            </div>
        </Layout>

    )
}